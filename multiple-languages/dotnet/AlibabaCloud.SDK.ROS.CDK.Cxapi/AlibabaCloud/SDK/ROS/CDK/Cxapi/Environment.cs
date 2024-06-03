using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cxapi
{
    #pragma warning disable CS8618

    /// <summary>Models an ALIYUN execution environment, for use within the CDK toolkit.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-cxapi.Environment")]
    public class Environment : AlibabaCloud.SDK.ROS.CDK.Cxapi.IEnvironment
    {
        /// <summary>The ALIYUN account this environment deploys into.</summary>
        [JsiiProperty(name: "account", typeJson: "{\"primitive\":\"string\"}")]
        public string Account
        {
            get;
            set;
        }

        /// <summary>The arbitrary name of this environment (user-set, or at least user-meaningful).</summary>
        [JsiiProperty(name: "name", typeJson: "{\"primitive\":\"string\"}")]
        public string Name
        {
            get;
            set;
        }

        /// <summary>The ALIYUN region name where this environment deploys into.</summary>
        [JsiiProperty(name: "region", typeJson: "{\"primitive\":\"string\"}")]
        public string Region
        {
            get;
            set;
        }
    }
}
