using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Assembly.Schema
{
    #pragma warning disable CS8618

    /// <summary>Query to SSM Parameter Context Provider.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-assembly-schema.SSMParameterContextQuery")]
    public class SSMParameterContextQuery : AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.ISSMParameterContextQuery
    {
        /// <summary>Query account.</summary>
        [JsiiProperty(name: "account", typeJson: "{\"primitive\":\"string\"}")]
        public string Account
        {
            get;
            set;
        }

        /// <summary>Parameter name to query.</summary>
        [JsiiProperty(name: "parameterName", typeJson: "{\"primitive\":\"string\"}")]
        public string ParameterName
        {
            get;
            set;
        }

        /// <summary>Query region.</summary>
        [JsiiProperty(name: "region", typeJson: "{\"primitive\":\"string\"}")]
        public string Region
        {
            get;
            set;
        }
    }
}
