using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Mongodb
{
    /// <summary>This class encapsulates and extends the ROS resource type `ALIYUN::MONGODB::Instance`.</summary>
    /// <remarks>
    /// <strong>Note</strong>: This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosInstance`for a more convenient development experience.
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mongodb-instance
    /// </remarks>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Mongodb.Instance), fullyQualifiedName: "@alicloud/ros-cdk-mongodb.Instance", parametersJson: "[{\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-mongodb.InstanceProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"optional\":true,\"type\":{\"primitive\":\"boolean\"}}]")]
    public class Instance : AlibabaCloud.SDK.ROS.CDK.Core.Resource_, AlibabaCloud.SDK.ROS.CDK.Mongodb.IInstance
    {
        /// <summary>Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.</summary>
        public Instance(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Mongodb.IInstanceProps props, bool? enableResourcePropertyConstraint = null): base(_MakeDeputyProps(scope, id, props, enableResourcePropertyConstraint))
        {
        }

        [System.Runtime.CompilerServices.MethodImpl(System.Runtime.CompilerServices.MethodImplOptions.AggressiveInlining)]
        private static DeputyProps _MakeDeputyProps(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Mongodb.IInstanceProps props, bool? enableResourcePropertyConstraint = null)
        {
            return new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint});
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected Instance(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected Instance(DeputyProps props): base(props)
        {
        }

        /// <summary>Grant an RAM principal (Role/Group/User) full control over this MongoDB instance.</summary>
        /// <param name="identity">The principal.</param>
        [JsiiMethod(name: "grantFullAccess", returnsJson: "{\"type\":{\"fqn\":\"@alicloud/ros-cdk-ram.ManagedPolicy\"}}", parametersJson: "[{\"docs\":{\"summary\":\"The principal.\"},\"name\":\"identity\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-ram.IPrincipal\"}}]")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Ram.ManagedPolicy GrantFullAccess(AlibabaCloud.SDK.ROS.CDK.Ram.IPrincipal identity)
        {
            return InvokeInstanceMethod<AlibabaCloud.SDK.ROS.CDK.Ram.ManagedPolicy>(new System.Type[]{typeof(AlibabaCloud.SDK.ROS.CDK.Ram.IPrincipal)}, new object[]{identity})!;
        }

        /// <summary>Grant an RAM principal (Role/Group/User) permission to list resources for this MongoDB instance.</summary>
        /// <param name="identity">The principal.</param>
        [JsiiMethod(name: "grantList", returnsJson: "{\"type\":{\"fqn\":\"@alicloud/ros-cdk-ram.ManagedPolicy\"}}", parametersJson: "[{\"docs\":{\"summary\":\"The principal.\"},\"name\":\"identity\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-ram.IPrincipal\"}}]")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Ram.ManagedPolicy GrantList(AlibabaCloud.SDK.ROS.CDK.Ram.IPrincipal identity)
        {
            return InvokeInstanceMethod<AlibabaCloud.SDK.ROS.CDK.Ram.ManagedPolicy>(new System.Type[]{typeof(AlibabaCloud.SDK.ROS.CDK.Ram.IPrincipal)}, new object[]{identity})!;
        }

        /// <summary>Grant an RAM principal (Role/Group/User) permission to list and get resources for this MongoDB instance.</summary>
        /// <param name="identity">The principal.</param>
        [JsiiMethod(name: "grantRead", returnsJson: "{\"type\":{\"fqn\":\"@alicloud/ros-cdk-ram.ManagedPolicy\"}}", parametersJson: "[{\"docs\":{\"summary\":\"The principal.\"},\"name\":\"identity\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-ram.IPrincipal\"}}]")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Ram.ManagedPolicy GrantRead(AlibabaCloud.SDK.ROS.CDK.Ram.IPrincipal identity)
        {
            return InvokeInstanceMethod<AlibabaCloud.SDK.ROS.CDK.Ram.ManagedPolicy>(new System.Type[]{typeof(AlibabaCloud.SDK.ROS.CDK.Ram.IPrincipal)}, new object[]{identity})!;
        }

        /// <summary>Grant an RAM principal (Role/Group/User) permission to create, update and delete resources for this MongoDB instance.</summary>
        /// <param name="identity">The principal.</param>
        [JsiiMethod(name: "grantReadWrite", returnsJson: "{\"type\":{\"fqn\":\"@alicloud/ros-cdk-ram.ManagedPolicy\"}}", parametersJson: "[{\"docs\":{\"summary\":\"The principal.\"},\"name\":\"identity\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-ram.IPrincipal\"}}]")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Ram.ManagedPolicy GrantReadWrite(AlibabaCloud.SDK.ROS.CDK.Ram.IPrincipal identity)
        {
            return InvokeInstanceMethod<AlibabaCloud.SDK.ROS.CDK.Ram.ManagedPolicy>(new System.Type[]{typeof(AlibabaCloud.SDK.ROS.CDK.Ram.IPrincipal)}, new object[]{identity})!;
        }

        /// <summary>Attribute Arn: The Alibaba Cloud Resource Name (ARN).</summary>
        [JsiiProperty(name: "attrArn", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrArn
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ConnectionURI: Connection uri.</summary>
        [JsiiProperty(name: "attrConnectionUri", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrConnectionUri
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute DBInstanceId: The instance id of created mongodb instance.</summary>
        [JsiiProperty(name: "attrDbInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrDbInstanceId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute DBInstanceStatus: Status of mongodb instance.</summary>
        [JsiiProperty(name: "attrDbInstanceStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrDbInstanceStatus
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute OrderId: Order Id of created instance.</summary>
        [JsiiProperty(name: "attrOrderId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrOrderId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ReplicaSetName: Name of replica set.</summary>
        [JsiiProperty(name: "attrReplicaSetName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrReplicaSetName
        {
            get => GetInstanceProperty<object>()!;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-mongodb.InstanceProps\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Mongodb.IInstanceProps Props
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Mongodb.IInstanceProps>()!;
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
