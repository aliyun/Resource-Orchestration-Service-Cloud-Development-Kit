using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Rds
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::RDS::DBInstanceParameterGroup`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-rds.RosDBInstanceParameterGroupProps")]
    public class RosDBInstanceParameterGroupProps : AlibabaCloud.SDK.ROS.CDK.Rds.IRosDBInstanceParameterGroupProps
    {
        /// <remarks>
        /// <strong>Property</strong>: dbInstanceId: Database InstanceId to update properties.
        /// </remarks>
        [JsiiProperty(name: "dbInstanceId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string DbInstanceId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: parameters: Parameters to update for selected database instance.
        /// </remarks>
        [JsiiProperty(name: "parameters", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-rds.RosDBInstanceParameterGroup.ParametersProperty\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOverride: true)]
        public object Parameters
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: forcerestart: whether restart database instance.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "forcerestart", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Forcerestart
        {
            get;
            set;
        }
    }
}
