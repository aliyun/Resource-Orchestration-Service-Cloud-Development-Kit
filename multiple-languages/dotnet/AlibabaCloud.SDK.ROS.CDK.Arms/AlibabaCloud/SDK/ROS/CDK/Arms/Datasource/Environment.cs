using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Arms.Datasource
{
    /// <summary>This class encapsulates and extends the ROS resource type `DATASOURCE::ARMS::Environment`.</summary>
    /// <remarks>
    /// <strong>Note</strong>: This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosEnvironment`for a more convenient development experience.
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-arms-environment
    /// </remarks>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Arms.Datasource.Environment), fullyQualifiedName: "@alicloud/ros-cdk-arms.datasource.Environment", parametersJson: "[{\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-arms.datasource.EnvironmentProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"optional\":true,\"type\":{\"primitive\":\"boolean\"}}]")]
    public class Environment : AlibabaCloud.SDK.ROS.CDK.Core.Resource_, AlibabaCloud.SDK.ROS.CDK.Arms.Datasource.IEnvironment
    {
        /// <summary>Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.</summary>
        public Environment(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Arms.Datasource.IEnvironmentProps props, bool? enableResourcePropertyConstraint = null): base(_MakeDeputyProps(scope, id, props, enableResourcePropertyConstraint))
        {
        }

        [System.Runtime.CompilerServices.MethodImpl(System.Runtime.CompilerServices.MethodImplOptions.AggressiveInlining)]
        private static DeputyProps _MakeDeputyProps(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Arms.Datasource.IEnvironmentProps props, bool? enableResourcePropertyConstraint = null)
        {
            return new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint});
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected Environment(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected Environment(DeputyProps props): base(props)
        {
        }

        /// <summary>Attribute BindResourceId: The id or vpcId of the bound container instance.</summary>
        [JsiiProperty(name: "attrBindResourceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrBindResourceId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute BindResourceType: Binding resource type.</summary>
        [JsiiProperty(name: "attrBindResourceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrBindResourceType
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute BindVpcCidr: The network segment of the bound vpc.</summary>
        [JsiiProperty(name: "attrBindVpcCidr", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrBindVpcCidr
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute EnvironmentId: The first ID of the resource.</summary>
        [JsiiProperty(name: "attrEnvironmentId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrEnvironmentId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute EnvironmentName: The name of the resource.</summary>
        [JsiiProperty(name: "attrEnvironmentName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrEnvironmentName
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute EnvironmentSubType: Subtype of environment.</summary>
        [JsiiProperty(name: "attrEnvironmentSubType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrEnvironmentSubType
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute EnvironmentType: Type of environment.</summary>
        [JsiiProperty(name: "attrEnvironmentType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrEnvironmentType
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute FeePackage: Paid package.</summary>
        [JsiiProperty(name: "attrFeePackage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrFeePackage
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute GrafanaDatasourceUid: The uid of the Grafana data source.</summary>
        [JsiiProperty(name: "attrGrafanaDatasourceUid", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrGrafanaDatasourceUid
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute GrafanaFolderUid: Binding Grafana directory uid.</summary>
        [JsiiProperty(name: "attrGrafanaFolderUid", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrGrafanaFolderUid
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ManagedType: Hosting type.</summary>
        [JsiiProperty(name: "attrManagedType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrManagedType
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute PrometheusInstanceId: The ID of the prometheus instance.</summary>
        [JsiiProperty(name: "attrPrometheusInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrPrometheusInstanceId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ResourceGroupId: The ID of the resource group.</summary>
        [JsiiProperty(name: "attrResourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrResourceGroupId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Tags: The tag of the resource.</summary>
        [JsiiProperty(name: "attrTags", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrTags
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute UserId: User ID.</summary>
        [JsiiProperty(name: "attrUserId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrUserId
        {
            get => GetInstanceProperty<object>()!;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-arms.datasource.EnvironmentProps\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Arms.Datasource.IEnvironmentProps Props
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Arms.Datasource.IEnvironmentProps>()!;
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
