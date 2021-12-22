using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Gpdb
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::GPDB::DBInstance`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-gpdb.DBInstanceProps")]
    public class DBInstanceProps : AlibabaCloud.SDK.ROS.CDK.Gpdb.IDBInstanceProps
    {
        /// <summary>Property dbInstanceClass: The instance type.</summary>
        [JsiiProperty(name: "dbInstanceClass", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object DbInstanceClass
        {
            get;
            set;
        }

        /// <summary>Property dbInstanceGroupCount: The number of compute nodes in the instance.</summary>
        [JsiiProperty(name: "dbInstanceGroupCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object DbInstanceGroupCount
        {
            get;
            set;
        }

        /// <summary>Property engineVersion: The version of the database engine.</summary>
        [JsiiProperty(name: "engineVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object EngineVersion
        {
            get;
            set;
        }

        /// <summary>Property vSwitchId: The vSwitch ID of the instance.</summary>
        [JsiiProperty(name: "vSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object VSwitchId
        {
            get;
            set;
        }

        /// <summary>Property zoneId: The zone ID of the instance, such as cn-hangzhou-d.</summary>
        /// <remarks>
        /// You can call the DescribeRegions
        /// operation to query the most recent zone list.
        /// </remarks>
        [JsiiProperty(name: "zoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object ZoneId
        {
            get;
            set;
        }

        /// <summary>Property dbInstanceDescription: The description of the instance.</summary>
        /// <remarks>
        /// The description cannot exceed 256 characters in length.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "dbInstanceDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? DbInstanceDescription
        {
            get;
            set;
        }

        /// <summary>Property payType: The billing method of the instance.</summary>
        /// <remarks>
        /// Default value: Postpaid. Valid values:
        /// Postpaid: pay-as-you-go
        /// Prepaid: subscription
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "payType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? PayType
        {
            get;
            set;
        }

        /// <summary>Property period: The subscription period.</summary>
        /// <remarks>
        /// While choose by pay by month, it could be from 1 to 11. While choose pay by year, it could be from 1 to 3.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "period", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? Period
        {
            get;
            set;
        }

        /// <summary>Property periodUnit: Unit of subscription period, it could be Month/Year.</summary>
        /// <remarks>
        /// Default value is Month.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "periodUnit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? PeriodUnit
        {
            get;
            set;
        }

        /// <summary>Property securityIpList: The whitelist of IP addresses that are allowed to access the instance.</summary>
        /// <remarks>
        /// Default value:
        /// 127.0.0.1.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "securityIpList", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? SecurityIpList
        {
            get;
            set;
        }

        /// <summary>Property vpcId: The VPC ID of the instance.</summary>
        /// <remarks>
        /// If you set the InstanceNetworkType parameter to VPC, you
        /// must also specify the VPCId parameter. The specified region of the VPC must be the
        /// same as the RegionId value.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? VpcId
        {
            get;
            set;
        }
    }
}
