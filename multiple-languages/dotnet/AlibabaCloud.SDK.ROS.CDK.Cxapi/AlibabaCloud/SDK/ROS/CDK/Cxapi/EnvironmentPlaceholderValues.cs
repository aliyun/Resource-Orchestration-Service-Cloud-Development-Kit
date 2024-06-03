using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cxapi
{
    #pragma warning disable CS8618

    /// <summary>Return the appropriate values for the environment placeholders.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-cxapi.EnvironmentPlaceholderValues")]
    public class EnvironmentPlaceholderValues : AlibabaCloud.SDK.ROS.CDK.Cxapi.IEnvironmentPlaceholderValues
    {
        /// <summary>Return the account.</summary>
        [JsiiProperty(name: "accountId", typeJson: "{\"primitive\":\"string\"}")]
        public string AccountId
        {
            get;
            set;
        }

        /// <summary>Return the region.</summary>
        [JsiiProperty(name: "region", typeJson: "{\"primitive\":\"string\"}")]
        public string Region
        {
            get;
            set;
        }
    }
}
