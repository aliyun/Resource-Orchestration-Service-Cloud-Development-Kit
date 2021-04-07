using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Rds
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::RDS::DBInstanceParameterGroup`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-rds.DBInstanceParameterGroupProps")]
    public class DBInstanceParameterGroupProps : AlibabaCloud.SDK.ROS.CDK.Rds.IDBInstanceParameterGroupProps
    {
        /// <summary>Property dbInstanceId: Database InstanceId to update properties.</summary>
        [JsiiProperty(name: "dbInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object DbInstanceId
        {
            get;
            set;
        }

        /// <summary>Property parameters: Parameters to update for selected database instance.</summary>
        [JsiiProperty(name: "parameters", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-rds.RosDBInstanceParameterGroup.ParametersProperty\"}]}},\"kind\":\"array\"}}]}}", isOverride: true)]
        public object Parameters
        {
            get;
            set;
        }

        /// <summary>Property forcerestart: whether restart database instance.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "forcerestart", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? Forcerestart
        {
            get;
            set;
        }
    }
}
