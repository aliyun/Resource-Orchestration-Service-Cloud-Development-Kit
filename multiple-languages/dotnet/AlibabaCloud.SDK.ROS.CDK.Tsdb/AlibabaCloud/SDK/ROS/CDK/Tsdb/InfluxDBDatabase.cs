using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Tsdb
{
    /// <summary>This class encapsulates and extends the ROS resource type `ALIYUN::TSDB::InfluxDBDatabase`.</summary>
    /// <remarks>
    /// <strong>Note</strong>: This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosInfluxDBDatabase`for a more convenient development experience.
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-tsdb-influxdbdatabase
    /// </remarks>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Tsdb.InfluxDBDatabase), fullyQualifiedName: "@alicloud/ros-cdk-tsdb.InfluxDBDatabase", parametersJson: "[{\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-tsdb.InfluxDBDatabaseProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"optional\":true,\"type\":{\"primitive\":\"boolean\"}}]")]
    public class InfluxDBDatabase : AlibabaCloud.SDK.ROS.CDK.Core.Resource_, AlibabaCloud.SDK.ROS.CDK.Tsdb.IInfluxDBDatabase
    {
        /// <summary>Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.</summary>
        public InfluxDBDatabase(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Tsdb.IInfluxDBDatabaseProps props, bool? enableResourcePropertyConstraint = null): base(_MakeDeputyProps(scope, id, props, enableResourcePropertyConstraint))
        {
        }

        [System.Runtime.CompilerServices.MethodImpl(System.Runtime.CompilerServices.MethodImplOptions.AggressiveInlining)]
        private static DeputyProps _MakeDeputyProps(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Tsdb.IInfluxDBDatabaseProps props, bool? enableResourcePropertyConstraint = null)
        {
            return new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint});
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected InfluxDBDatabase(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected InfluxDBDatabase(DeputyProps props): base(props)
        {
        }

        /// <summary>Attribute DBName: The name of database.</summary>
        [JsiiProperty(name: "attrDbName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrDbName
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute InstanceId: The ID of TSDB for InfluxDB.</summary>
        [JsiiProperty(name: "attrInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrInstanceId
        {
            get => GetInstanceProperty<object>()!;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-tsdb.InfluxDBDatabaseProps\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Tsdb.IInfluxDBDatabaseProps Props
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Tsdb.IInfluxDBDatabaseProps>()!;
        }

        [JsiiProperty(name: "enableResourcePropertyConstraint", typeJson: "{\"primitive\":\"boolean\"}")]
        protected virtual bool EnableResourcePropertyConstraint
        {
            get => GetInstanceProperty<bool>()!;
            set => SetInstanceProperty(value);
        }

        [JsiiProperty(name: "id", typeJson: "{\"primitive\":\"string\"}")]
        protected virtual string Id
        {
            get => GetInstanceProperty<string>()!;
            set => SetInstanceProperty(value);
        }

        [JsiiProperty(name: "scope", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}")]
        protected virtual AlibabaCloud.SDK.ROS.CDK.Core.Construct Scope
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.Construct>()!;
            set => SetInstanceProperty(value);
        }
    }
}
