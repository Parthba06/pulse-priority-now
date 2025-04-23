
import React from "react";
import { CheckCircle, Video, Users, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <h2 className="text-3xl font-extrabold text-medical-dark sm:text-4xl">
              About PulsePriorityNow
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Our mission is to revolutionize emergency department triage, ensuring that the most critical patients receive
              immediate care while maintaining transparency and clinical oversight.
            </p>
            <div className="mt-6 space-y-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-medical-green" />
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-medical-dark">Proven Results</h3>
                  <p className="mt-1 text-gray-500">
                    30% reduction in wait times for critical patients and improved outcomes in pilot hospitals.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-medical-green" />
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-medical-dark">Clinician-Centered Design</h3>
                  <p className="mt-1 text-gray-500">
                    Developed with emergency physicians and nurses to ensure it enhances rather than replaces clinical judgment.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-medical-green" />
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-medical-dark">Fully Compliant</h3>
                  <p className="mt-1 text-gray-500">
                    HIPAA-compliant, FDA-reviewed, and designed to meet healthcare regulatory requirements.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <Button className="px-6 py-6 bg-medical-blue hover:bg-medical-blue/90 text-white font-bold">
                Request Full Demo
              </Button>
              <Button variant="link" className="ml-4 text-medical-blue">
                Read Case Studies
              </Button>
            </div>
          </div>
          <div className="mt-12 lg:mt-0 lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
                <Building2 className="h-10 w-10 text-medical-blue mb-4" />
                <h3 className="text-lg font-medium text-medical-dark">Compatible with any EHR</h3>
                <p className="mt-2 text-gray-600">
                  Seamlessly integrates with Epic, Cerner, Meditech, Allscripts, and other major electronic health record systems.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
                <Users className="h-10 w-10 text-medical-blue mb-4" />
                <h3 className="text-lg font-medium text-medical-dark">Human-in-the-Loop</h3>
                <p className="mt-2 text-gray-600">
                  Clinicians always have the final say, with AI recommendations serving as decision support, not replacement.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
                <Video className="h-10 w-10 text-medical-blue mb-4" />
                <h3 className="text-lg font-medium text-medical-dark">Tele-Triage Extension</h3>
                <p className="mt-2 text-gray-600">
                  Enable paramedics and remote clinicians to begin the triage process before patient arrival.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl shadow-sm sm:flex sm:flex-col">
                <div className="flex-1">
                  <svg className="h-10 w-10 text-medical-blue mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                  <h3 className="text-lg font-medium text-medical-dark">Comprehensive Audit Trail</h3>
                  <p className="mt-2 text-gray-600">
                    Full logging of all AI recommendations and clinician decisions for quality improvement and legal compliance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
