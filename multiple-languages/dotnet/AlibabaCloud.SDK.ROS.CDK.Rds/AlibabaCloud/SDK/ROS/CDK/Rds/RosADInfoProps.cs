using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Rds
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::RDS::ADInfo`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-rds.RosADInfoProps")]
    public class RosADInfoProps : AlibabaCloud.SDK.ROS.CDK.Rds.IRosADInfoProps
    {
        /// <remarks>
        /// <strong>Property</strong>: adAccountName: Domain account name.
        /// </remarks>
        [JsiiProperty(name: "adAccountName", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string AdAccountName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: addns: Active directory domain name.
        /// </remarks>
        [JsiiProperty(name: "addns", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string Addns
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: adPassword: Domain password.
        /// </remarks>
        [JsiiProperty(name: "adPassword", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string AdPassword
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: adServerIpAddress: The IP address of the AD server, it must be in the same VPC as the RDS.
        /// </remarks>
        [JsiiProperty(name: "adServerIpAddress", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string AdServerIpAddress
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: dbInstanceId: The ID of the instance.
        /// </remarks>
        [JsiiProperty(name: "dbInstanceId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string DbInstanceId
        {
            get;
            set;
        }
    }
}
