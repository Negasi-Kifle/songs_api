"use strict";

class APIFeatures {
  constructor(dbQuery, reqQuery) {
    this.dbQuery = dbQuery;
    if (reqQuery) {
      this.reqQuery = reqQuery;
    }
  }

  filter() {
    let queryObj = { ...this.reqQuery };
    const excludedFields = ["page", "sort", "limit", "fields"];
    excludedFields.forEach(function (el) {
      delete queryObj[el];
    });

    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, function (match) {
      return `$${match}`;
    });

    queryObj = JSON.parse(queryStr);

    this.dbQuery = this.dbQuery.find(queryObj);

    return this;
  }

  sort() {
    if (this.reqQuery.sort) {
      const sortValue = this.reqQuery.sort;
      this.dbQuery.sort(sortValue.split(",").join(" "));
    } else {
      this.dbQuery.sort("-createdAt");
    }
    return this;
  }

  project() {
    if (this.reqQuery.fields) {
      const projectValue = this.reqQuery.fields;
      this.dbQuery.select(projectValue.split(",").join(" "));
    } else {
      this.dbQuery.select("-_v");
    }
    return this;
  }

  paginate() {
    const page = this.reqQuery.page || 1;
    const limit = this.reqQuery.limit || 10;
    const skip = (page - 1) * limit;
    this.dbQuery.skip(skip).limit(limit);
    return this;
  }
}

module.exports = APIFeatures;
