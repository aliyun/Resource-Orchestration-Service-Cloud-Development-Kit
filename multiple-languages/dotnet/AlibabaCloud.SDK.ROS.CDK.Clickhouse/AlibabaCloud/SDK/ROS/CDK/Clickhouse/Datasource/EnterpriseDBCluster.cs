using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Clickhouse.Datasource
{
    /// <summary>This class encapsulates and extends the ROS resource type `DATASOURCE::ClickHouse::EnterpriseDBCluster`.</summary>
    /// <remarks>
    /// <strong>Note</strong>: This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosEnterpriseDBCluster`for a more convenient development experience.
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-clickhouse-enterprisedbcluster
    /// </remarks>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Clickhouse.Datasource.EnterpriseDBCluster), fullyQualifiedName: "@alicloud/ros-cdk-clickhouse.datasource.EnterpriseDBCluster", parametersJson: "[{\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-clickhouse.datasource.EnterpriseDBClusterProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"optional\":true,\"type\":{\"primitive\":\"boolean\"}}]")]
    public class EnterpriseDBCluster : AlibabaCloud.SDK.ROS.CDK.Core.Resource_, AlibabaCloud.SDK.ROS.CDK.Clickhouse.Datasource.IEnterpriseDBCluster
    {
        /// <summary>Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.</summary>
        public EnterpriseDBCluster(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Clickhouse.Datasource.IEnterpriseDBClusterProps props, bool? enableResourcePropertyConstraint = null): base(_MakeDeputyProps(scope, id, props, enableResourcePropertyConstraint))
        {
        }

        [System.Runtime.CompilerServices.MethodImpl(System.Runtime.CompilerServices.MethodImplOptions.AggressiveInlining)]
        private static DeputyProps _MakeDeputyProps(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Clickhouse.Datasource.IEnterpriseDBClusterProps props, bool? enableResourcePropertyConstraint = null)
        {
            return new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint});
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected EnterpriseDBCluster(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected EnterpriseDBCluster(DeputyProps props): base(props)
        {
        }

        /// <summary>Attribute Category: Type, value description: enterprise: Enterprise Edition.</summary>
        [JsiiProperty(name: "attrCategory", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrCategory
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ChargeType: The billing method.</summary>
        /// <remarks>
        /// Enterprise Edition clusters use the pay-as-you-go billing method.
        /// </remarks>
        [JsiiProperty(name: "attrChargeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrChargeType
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ComputingGroupIds: The list of computing group IDs.</summary>
        [JsiiProperty(name: "attrComputingGroupIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrComputingGroupIds
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute CreateTime: The creation time of the cluster.</summary>
        [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrCreateTime
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute DBInstanceId: The cluster ID.</summary>
        [JsiiProperty(name: "attrDbInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrDbInstanceId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Description: The cluster description.</summary>
        [JsiiProperty(name: "attrDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrDescription
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute DisabledPorts: The specified database port is disabled.</summary>
        /// <remarks>
        /// Multiple ports separated by commas (,) are supported.
        /// </remarks>
        [JsiiProperty(name: "attrDisabledPorts", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrDisabledPorts
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Endpoints: List of Endpoint details.</summary>
        [JsiiProperty(name: "attrEndpoints", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrEndpoints
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Engine: The engine type.</summary>
        [JsiiProperty(name: "attrEngine", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrEngine
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute EngineMinorVersion: The minor version number of the cluster engine.</summary>
        [JsiiProperty(name: "attrEngineMinorVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrEngineMinorVersion
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute EngineVersion: The engine version.</summary>
        [JsiiProperty(name: "attrEngineVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrEngineVersion
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute InstanceNetworkType: The network type of the instance.</summary>
        [JsiiProperty(name: "attrInstanceNetworkType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrInstanceNetworkType
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute MaintainEndTime: The end time of the maintenance window.</summary>
        [JsiiProperty(name: "attrMaintainEndTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrMaintainEndTime
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute MaintainStartTime: The maintainable time start time.</summary>
        [JsiiProperty(name: "attrMaintainStartTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrMaintainStartTime
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute MultiZones: The information about the zones.</summary>
        [JsiiProperty(name: "attrMultiZones", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrMultiZones
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute NodeCount: The number of nodes.</summary>
        /// <remarks>
        /// The value range is 2-16. Required when you use NodeScaleMin and NodeScaleMax to configure an elastic interval.
        /// </remarks>
        [JsiiProperty(name: "attrNodeCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrNodeCount
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Nodes: The Node information.</summary>
        [JsiiProperty(name: "attrNodes", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrNodes
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute NodeScaleMax: The maximum value of serverless node auto scaling.</summary>
        [JsiiProperty(name: "attrNodeScaleMax", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrNodeScaleMax
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute NodeScaleMin: Minimum number of Serverless nodes for auto-scaling.</summary>
        [JsiiProperty(name: "attrNodeScaleMin", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrNodeScaleMin
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ObjectStoreSize: The size of the object storage space.</summary>
        [JsiiProperty(name: "attrObjectStoreSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrObjectStoreSize
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ResourceGroupId: The ID of the resource group.</summary>
        [JsiiProperty(name: "attrResourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrResourceGroupId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ScaleMax: The maximum capacity for elastic scaling.</summary>
        [JsiiProperty(name: "attrScaleMax", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrScaleMax
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ScaleMin: The minimum capacity for elastic scaling.</summary>
        [JsiiProperty(name: "attrScaleMin", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrScaleMin
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute StorageQuota: Storage Pre-purchased Capacity (GB).</summary>
        [JsiiProperty(name: "attrStorageQuota", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrStorageQuota
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute StorageSize: The size of the storage space.</summary>
        /// <remarks>
        /// Unit: GB.
        /// </remarks>
        [JsiiProperty(name: "attrStorageSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrStorageSize
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute StorageType: The storage type.</summary>
        [JsiiProperty(name: "attrStorageType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrStorageType
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Tags: The details of the tags.</summary>
        [JsiiProperty(name: "attrTags", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrTags
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute VpcId: The VPC ID.</summary>
        [JsiiProperty(name: "attrVpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrVpcId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute VswitchId: The VSwitch ID.</summary>
        [JsiiProperty(name: "attrVswitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrVswitchId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ZoneId: The zone ID.</summary>
        [JsiiProperty(name: "attrZoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrZoneId
        {
            get => GetInstanceProperty<object>()!;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-clickhouse.datasource.EnterpriseDBClusterProps\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Clickhouse.Datasource.IEnterpriseDBClusterProps Props
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Clickhouse.Datasource.IEnterpriseDBClusterProps>()!;
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
