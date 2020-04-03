"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _ = _interopRequireDefault(require("."));

var _Mock = _interopRequireDefault(require("./Mock"));

var _stories = _interopRequireDefault(require("../../Sections/Education/stories"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var controls = {
  id: {
    preLoading: false,
    loading: false,
    error: false,
    success: true
  },
  firstName: {
    preLoading: false,
    loading: false,
    error: false,
    success: true
  },
  lastName: {
    preLoading: false,
    loading: false,
    error: false,
    success: true
  },
  email: {
    preLoading: false,
    loading: false,
    error: false,
    success: true
  },
  resume: {
    preLoading: false,
    loading: false,
    error: false,
    success: true
  },
  image: {
    preLoading: false,
    loading: false,
    error: false,
    success: true
  },
  citizenship: {
    preLoading: false,
    loading: false,
    error: false,
    success: true
  },
  location: {
    preLoading: false,
    loading: false,
    error: false,
    success: true
  },
  gender: {
    preLoading: false,
    loading: false,
    error: false,
    success: true
  },
  phone: {
    preLoading: false,
    loading: false,
    error: false,
    success: true
  },
  onboarding: {
    preLoading: false,
    loading: false,
    error: false,
    success: true
  },
  positionSkill: {
    preLoading: false,
    loading: false,
    error: false,
    success: true
  },
  positionName: {
    preLoading: false,
    loading: false,
    error: false,
    success: true
  },
  yearsOfExperience: {
    preLoading: false,
    loading: false,
    error: false,
    success: true
  },
  openForDifferentRole: {
    preLoading: false,
    loading: false,
    error: false,
    success: true
  },
  workAs: {
    preLoading: false,
    loading: false,
    error: false,
    success: true
  },
  userPositions: {
    preLoading: false,
    loading: false,
    error: false,
    success: true
  },
  topSkill: {
    preLoading: false,
    loading: false,
    error: false,
    success: true
  },
  secondarySkill: {
    preLoading: false,
    loading: false,
    error: false,
    success: true
  },
  openForRemoteJobs: {
    preLoading: false,
    loading: false,
    error: false,
    success: true
  },
  targetLocation: {
    preLoading: false,
    loading: false,
    error: false,
    success: true
  },
  salaryExpectationCad: {
    preLoading: false,
    loading: false,
    error: false,
    success: true
  },
  salaryExpectationEur: {
    preLoading: false,
    loading: false,
    error: false,
    success: true
  },
  salaryRangeCad: {
    preLoading: false,
    loading: false,
    error: false,
    success: true
  },
  salaryRangeEur: {
    preLoading: false,
    loading: false,
    error: false,
    success: true
  },
  visaStatusCanadian: {
    preLoading: false,
    loading: false,
    error: false,
    success: true
  },
  visaStatusEU: {
    preLoading: false,
    loading: false,
    error: false,
    success: true
  },
  passportExpirationDate: {
    preLoading: false,
    loading: false,
    error: false,
    success: true
  },
  passportValid: {
    preLoading: false,
    loading: false,
    error: false,
    success: true
  },
  leadershipExperience: {
    preLoading: false,
    loading: false,
    error: false,
    success: true
  },
  companySize: {
    preLoading: false,
    loading: false,
    error: false,
    success: true
  },
  activelyLookingForJob: {
    preLoading: false,
    loading: false,
    error: false,
    success: true
  },
  noticePeriod: {
    preLoading: false,
    loading: false,
    error: false,
    success: true
  },
  linkedin: {
    preLoading: false,
    loading: false,
    error: false,
    success: true
  },
  git: {
    preLoading: false,
    loading: false,
    error: false,
    success: true
  },
  webSite: {
    preLoading: false,
    loading: false,
    error: false,
    success: true
  },
  degreeType: {
    preLoading: false,
    loading: false,
    error: false,
    success: true
  },
  experienceSection: {
    loading: false,
    preLoading: false,
    success: true,
    error: false
  },
  educationSection: {
    loading: false,
    preLoading: false,
    success: true,
    error: false
  },
  language: {
    loading: false,
    preLoading: false,
    success: false,
    error: false
  }
};
var controlsPreloading = {
  citizenship: {
    loading: false,
    preLoading: true,
    error: false,
    success: false
  },
  linkedin: {
    loading: false,
    preLoading: true,
    error: false,
    success: false
  },
  git: {
    loading: false,
    preLoading: true,
    error: false,
    success: false
  },
  webSite: {
    loading: false,
    preLoading: true,
    error: false,
    success: false
  },
  location: {
    loading: false,
    preLoading: true,
    error: false,
    success: false
  },
  gender: {
    loading: false,
    preLoading: true,
    error: false,
    success: false
  },
  phone: {
    loading: false,
    preLoading: true,
    error: false,
    success: false
  },
  positionSkill: {
    loading: false,
    preLoading: true,
    error: false,
    success: false
  },
  openForDifferentRole: {
    loading: false,
    preLoading: true,
    error: false,
    success: false
  },
  yearsOfExperience: {
    loading: false,
    preLoading: true,
    error: false,
    success: false
  },
  workAs: {
    loading: false,
    preLoading: true,
    error: false,
    success: false
  },
  topSkill: {
    loading: false,
    preLoading: true,
    error: false,
    success: false
  },
  salaryRangeEur: {
    loading: false,
    preLoading: true,
    error: false,
    success: false
  },
  salaryRangeCad: {
    loading: false,
    preLoading: true,
    error: false,
    success: false
  },
  visaStatusEU: {
    loading: false,
    preLoading: true,
    success: false,
    error: false
  },
  visaStatusCanadian: {
    loading: false,
    preLoading: true,
    success: false,
    error: false
  },
  companySize: {
    loading: false,
    preLoading: true,
    success: false,
    error: false
  },
  secondarySkill: {
    loading: false,
    preLoading: true,
    success: false,
    error: false
  },
  noticePeriod: {
    loading: false,
    preLoading: true,
    success: false,
    error: false
  },
  experienceSection: {
    loading: false,
    preLoading: true,
    success: false,
    error: false
  },
  educationSection: {
    loading: false,
    preLoading: true,
    success: false,
    error: false
  },
  language: {
    loading: false,
    preLoading: true,
    success: false,
    error: false
  }
};
var controlsLoading = {
  citizenship: {
    loading: true,
    preLoading: false,
    error: false,
    success: false
  },
  linkedin: {
    loading: true,
    preLoading: false,
    error: false,
    success: false
  },
  git: {
    loading: true,
    preLoading: false,
    error: false,
    success: false
  },
  webSite: {
    loading: true,
    preLoading: false,
    error: false,
    success: false
  },
  location: {
    loading: true,
    preLoading: false,
    error: false,
    success: false
  },
  gender: {
    loading: true,
    preLoading: false,
    error: false,
    success: false
  },
  phone: {
    loading: true,
    preLoading: false,
    error: false,
    success: false
  },
  positionSkill: {
    loading: true,
    preLoading: false,
    error: false,
    success: false
  },
  openForDifferentRole: {
    loading: true,
    preLoading: false,
    error: false,
    success: false
  },
  yearsOfExperience: {
    loading: true,
    preLoading: false,
    error: false,
    success: false
  },
  workAs: {
    loading: true,
    preLoading: false,
    error: false,
    success: false
  },
  topSkill: {
    loading: true,
    preLoading: false,
    error: false,
    success: false
  },
  salaryRangeEur: {
    loading: true,
    preLoading: false,
    error: false,
    success: false
  },
  salaryRangeCad: {
    loading: true,
    preLoading: false,
    error: false,
    success: false
  },
  visaStatusEU: {
    loading: true,
    preLoading: false,
    success: false,
    error: false
  },
  visaStatusCanadian: {
    loading: true,
    preLoading: false,
    success: false,
    error: false
  },
  companySize: {
    loading: true,
    preLoading: false,
    success: false,
    error: false
  },
  secondarySkill: {
    loading: true,
    preLoading: false,
    success: false,
    error: false
  },
  noticePeriod: {
    loading: true,
    preLoading: false,
    success: false,
    error: false
  },
  experienceSection: {
    loading: true,
    preLoading: false,
    success: false,
    error: false
  },
  educationSection: {
    loading: true,
    preLoading: false,
    success: false,
    error: false
  },
  language: {
    loading: true,
    preLoading: false,
    success: false,
    error: false
  }
};
var experiences = {
  "firstExperienceDate": "2019-08-01T00:00:00",
  "experiences": [{
    "workExperiences": [{
      "companyName": "new companynew company",
      "countryId": 661882,
      "country": "Åland",
      "companySize": 1,
      "companySizeStr": "Startup",
      "industry": null,
      "industryId": 3,
      "positionId": 7,
      "position": "UI/UX Designer",
      "isCurrentRole": null,
      "startDate": "2020-03-12T00:00:00",
      "endDate": "2020-03-27T00:00:00",
      "description": "new description",
      "skills": [],
      "id": 146671
    }, {
      "companyName": "new companynew company",
      "countryId": 661882,
      "country": "Åland",
      "companySize": 1,
      "companySizeStr": "Startup",
      "industry": null,
      "industryId": 3,
      "positionId": 1,
      "position": "Backend Engineer",
      "isCurrentRole": null,
      "startDate": "2020-03-12T00:00:00",
      "endDate": "2020-03-27T00:00:00",
      "description": "new description",
      "skills": [],
      "id": 146672
    }, {
      "companyName": "new companynew company",
      "countryId": 661882,
      "country": "Åland",
      "companySize": 1,
      "companySizeStr": "Startup",
      "industry": null,
      "industryId": 3,
      "positionId": 3,
      "position": "Full Stack Engineer",
      "isCurrentRole": null,
      "startDate": "2020-03-05T00:00:00",
      "endDate": "2020-03-02T00:00:00",
      "description": "dsfdsdfsfd",
      "skills": [],
      "id": 146669
    }, {
      "companyName": "new companynew company",
      "countryId": 661882,
      "country": "Åland",
      "companySize": 1,
      "companySizeStr": "Startup",
      "industry": null,
      "industryId": 3,
      "positionId": 3,
      "position": "Full Stack Engineer",
      "isCurrentRole": null,
      "startDate": "2020-03-05T00:00:00",
      "endDate": "2020-03-02T00:00:00",
      "description": "dsfdsdfsfd",
      "skills": [],
      "id": 146670
    }, {
      "companyName": "new companynew company",
      "countryId": 661882,
      "country": "Åland",
      "companySize": 1,
      "companySizeStr": "Startup",
      "industry": null,
      "industryId": 3,
      "positionId": 1,
      "position": "Backend Engineer",
      "isCurrentRole": null,
      "startDate": "2020-03-05T00:00:00",
      "endDate": "2020-03-02T00:00:00",
      "description": "dsfdsdfsfd",
      "skills": [],
      "id": 146673
    }, {
      "companyName": "new companynew company",
      "countryId": 661882,
      "country": "Åland",
      "companySize": 1,
      "companySizeStr": "Startup",
      "industry": null,
      "industryId": 3,
      "positionId": 1,
      "position": "Backend Engineer",
      "isCurrentRole": null,
      "startDate": "2020-03-05T00:00:00",
      "endDate": "2020-03-02T00:00:00",
      "description": "dsfdsdfsfd",
      "skills": [],
      "id": 146674
    }],
    "companyName": "new companynew company",
    "countryId": 661882,
    "country": "Åland",
    "companySize": 1,
    "companySizeStr": "Startup",
    "industry": null,
    "industryId": 3,
    "id": 146671
  }, {
    "workExperiences": [{
      "companyName": "dassas",
      "countryId": 661882,
      "country": "Åland",
      "companySize": 2,
      "companySizeStr": "Mid Size",
      "industry": null,
      "industryId": 3,
      "positionId": 3,
      "position": "Full Stack Engineer",
      "isCurrentRole": null,
      "startDate": "2020-03-04T00:00:00",
      "endDate": null,
      "description": "[{\"value\":\"teste 1\",\"loading\":true},{\"value\":\"teste 2\",\"loading\":true},{\"value\":\"\"}]",
      "skills": [],
      "id": 146676
    }],
    "companyName": "dassas",
    "countryId": 661882,
    "country": "Åland",
    "companySize": 2,
    "companySizeStr": "Mid Size",
    "industry": null,
    "industryId": 3,
    "id": 146676
  }, {
    "workExperiences": [{
      "companyName": "FInal company",
      "countryId": 3469034,
      "country": "Brazil",
      "companySize": 2,
      "companySizeStr": "Mid Size",
      "industry": null,
      "industryId": 12,
      "positionId": 7,
      "position": "UI/UX Designer",
      "isCurrentRole": null,
      "startDate": "2020-03-02T00:00:00",
      "endDate": null,
      "description": "just a description",
      "skills": [],
      "id": 146675
    }],
    "companyName": "FInal company",
    "countryId": 3469034,
    "country": "Brazil",
    "companySize": 2,
    "companySizeStr": "Mid Size",
    "industry": null,
    "industryId": 12,
    "id": 146675
  }, {
    "workExperiences": [{
      "companyName": "sdasasdas",
      "countryId": 3469034,
      "country": "Brazil",
      "companySize": 2,
      "companySizeStr": "Mid Size",
      "industry": null,
      "industryId": 3,
      "positionId": 3,
      "position": "Full Stack Engineer",
      "isCurrentRole": null,
      "startDate": "2019-08-01T00:00:00",
      "endDate": "2019-01-01T00:00:00",
      "description": "[{\"value\":\"teste 1\",\"loading\":true},{\"value\":\"\"}]",
      "skills": [],
      "id": 119938
    }],
    "companyName": "sdasasdas",
    "countryId": 3469034,
    "country": "Brazil",
    "companySize": 2,
    "companySizeStr": "Mid Size",
    "industry": null,
    "industryId": 3,
    "id": 119938
  }]
};
var languages = [{
  value: 0,
  label: 'English'
}];
(0, _react2.storiesOf)("Templates|Profile", module).add("default", function () {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      backgroundColor: "#f2f2f2",
      height: "100%"
    }
  }, /*#__PURE__*/_react.default.createElement(_.default, {
    experience: experiences,
    languages: languages,
    controls: controls
  }));
}).add("preLoading", function () {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      backgroundColor: "#f2f2f2",
      height: "100%"
    }
  });
}).add("loading", function () {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      backgroundColor: "#f2f2f2",
      height: "100%"
    }
  }, /*#__PURE__*/_react.default.createElement(_.default, {
    experience: experiences,
    languages: languages,
    controls: controlsLoading
  }));
});