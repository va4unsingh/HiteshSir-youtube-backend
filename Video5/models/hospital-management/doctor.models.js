import mongoose from "mongoose";

// Sub-schema for hospital work details
const hospitalWorkSchema = new mongoose.Schema({
  hospital: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Hospital",
    required: true,
  },
  hoursWorked: {
    type: Number,
    required: true,
    default: 0,
  },
  startDate: Date,
  endDate: Date,
});

const doctorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    salary: {
      type: String,
      required: true,
    },
    qualification: {
      type: String,
      required: true,
    },
    experienceInYears: {
      type: Number,
      default: 0,
    },

    // worksInHospitals: [
    //   {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "Hospital",
    //   },
    // ],

    worksInHospitals: [hospitalWorkSchema],
  },
  { timestamps: true }
);

export const Doctor = mongoose.model("Doctor", doctorSchema);
