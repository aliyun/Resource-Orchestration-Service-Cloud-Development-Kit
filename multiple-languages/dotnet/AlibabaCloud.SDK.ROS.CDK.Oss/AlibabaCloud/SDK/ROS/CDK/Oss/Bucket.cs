using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Oss
{
    /// <summary>This class encapsulates and extends the ROS resource type `ALIYUN::OSS::Bucket`.</summary>
    /// <remarks>
    /// <strong>Note</strong>: This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosBucket`for a more convenient development experience.
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-bucket
    /// </remarks>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Oss.Bucket), fullyQualifiedName: "@alicloud/ros-cdk-oss.Bucket", parametersJson: "[{\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-oss.BucketProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"optional\":true,\"type\":{\"primitive\":\"boolean\"}}]")]
    public class Bucket : AlibabaCloud.SDK.ROS.CDK.Core.Resource_, AlibabaCloud.SDK.ROS.CDK.Oss.IBucket
    {
        /// <summary>Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.</summary>
        public Bucket(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Oss.IBucketProps props, bool? enableResourcePropertyConstraint = null): base(_MakeDeputyProps(scope, id, props, enableResourcePropertyConstraint))
        {
        }

        [System.Runtime.CompilerServices.MethodImpl(System.Runtime.CompilerServices.MethodImplOptions.AggressiveInlining)]
        private static DeputyProps _MakeDeputyProps(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Oss.IBucketProps props, bool? enableResourcePropertyConstraint = null)
        {
            return new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint});
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected Bucket(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected Bucket(DeputyProps props): base(props)
        {
        }

        /// <summary>Thrown an exception if the given bucket name is not valid.</summary>
        /// <param name="physicalName">name of the bucket.</param>
        [JsiiMethod(name: "validateBucketName", parametersJson: "[{\"docs\":{\"summary\":\"name of the bucket.\"},\"name\":\"physicalName\",\"type\":{\"primitive\":\"string\"}}]", isAsync: true)]
        public static void ValidateBucketName(string physicalName)
        {
            InvokeStaticVoidMethod(typeof(AlibabaCloud.SDK.ROS.CDK.Oss.Bucket), new System.Type[]{typeof(string)}, new object[]{physicalName});
        }

        /// <summary>Returns an ARN that represents all objects within the bucket that match the key pattern specified.</summary>
        /// <remarks>
        /// To represent all keys, specify <c>"*"</c>.
        ///
        /// If you need to specify a keyPattern with multiple components, concatenate them into a single string, e.g.:
        ///
        /// arnForObjects(<c>home/${team}/${user}/*</c>)
        /// </remarks>
        [JsiiMethod(name: "arnForObjects", returnsJson: "{\"type\":{\"primitive\":\"string\"}}", parametersJson: "[{\"name\":\"keyPattern\",\"type\":{\"primitive\":\"string\"}}]")]
        public virtual string ArnForObjects(string keyPattern)
        {
            return InvokeInstanceMethod<string>(new System.Type[]{typeof(string)}, new object[]{keyPattern})!;
        }

        /// <summary>Grant an RAM principal (Role/Group/User) full control over this bucket.</summary>
        /// <param name="identity">The principal.</param>
        /// <param name="objectsKeyPattern">Restrict the permission to a certain key pattern (default '*').</param>
        [JsiiMethod(name: "grantFullAccess", returnsJson: "{\"type\":{\"fqn\":\"@alicloud/ros-cdk-ram.ManagedPolicy\"}}", parametersJson: "[{\"docs\":{\"summary\":\"The principal.\"},\"name\":\"identity\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-ram.IPrincipal\"}},{\"docs\":{\"summary\":\"Restrict the permission to a certain key pattern (default '*').\"},\"name\":\"objectsKeyPattern\",\"optional\":true,\"type\":{\"primitive\":\"string\"}}]")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Ram.ManagedPolicy GrantFullAccess(AlibabaCloud.SDK.ROS.CDK.Ram.IPrincipal identity, string? objectsKeyPattern = null)
        {
            return InvokeInstanceMethod<AlibabaCloud.SDK.ROS.CDK.Ram.ManagedPolicy>(new System.Type[]{typeof(AlibabaCloud.SDK.ROS.CDK.Ram.IPrincipal), typeof(string)}, new object?[]{identity, objectsKeyPattern})!;
        }

        /// <summary>Grant an RAM principal (Role/Group/User) permission to list resources for this bucket.</summary>
        /// <param name="identity">The principal.</param>
        /// <param name="objectsKeyPattern">Restrict the permission to a certain key pattern (default '*').</param>
        [JsiiMethod(name: "grantList", returnsJson: "{\"type\":{\"fqn\":\"@alicloud/ros-cdk-ram.ManagedPolicy\"}}", parametersJson: "[{\"docs\":{\"summary\":\"The principal.\"},\"name\":\"identity\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-ram.IPrincipal\"}},{\"docs\":{\"summary\":\"Restrict the permission to a certain key pattern (default '*').\"},\"name\":\"objectsKeyPattern\",\"optional\":true,\"type\":{\"primitive\":\"string\"}}]")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Ram.ManagedPolicy GrantList(AlibabaCloud.SDK.ROS.CDK.Ram.IPrincipal identity, string? objectsKeyPattern = null)
        {
            return InvokeInstanceMethod<AlibabaCloud.SDK.ROS.CDK.Ram.ManagedPolicy>(new System.Type[]{typeof(AlibabaCloud.SDK.ROS.CDK.Ram.IPrincipal), typeof(string)}, new object?[]{identity, objectsKeyPattern})!;
        }

        /// <summary>Grant an RAM principal (Role/Group/User) permission to list and read all resources for this bucket.</summary>
        /// <param name="identity">The principal.</param>
        /// <param name="objectsKeyPattern">Restrict the permission to a certain key pattern (default '*').</param>
        [JsiiMethod(name: "grantRead", returnsJson: "{\"type\":{\"fqn\":\"@alicloud/ros-cdk-ram.ManagedPolicy\"}}", parametersJson: "[{\"docs\":{\"summary\":\"The principal.\"},\"name\":\"identity\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-ram.IPrincipal\"}},{\"docs\":{\"summary\":\"Restrict the permission to a certain key pattern (default '*').\"},\"name\":\"objectsKeyPattern\",\"optional\":true,\"type\":{\"primitive\":\"string\"}}]")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Ram.ManagedPolicy GrantRead(AlibabaCloud.SDK.ROS.CDK.Ram.IPrincipal identity, string? objectsKeyPattern = null)
        {
            return InvokeInstanceMethod<AlibabaCloud.SDK.ROS.CDK.Ram.ManagedPolicy>(new System.Type[]{typeof(AlibabaCloud.SDK.ROS.CDK.Ram.IPrincipal), typeof(string)}, new object?[]{identity, objectsKeyPattern})!;
        }

        /// <summary>Grant an RAM principal (Role/Group/User) permission to read and write resources for this bucket.</summary>
        /// <param name="identity">The principal.</param>
        /// <param name="objectsKeyPattern">Restrict the permission to a certain key pattern (default '*').</param>
        [JsiiMethod(name: "grantReadWrite", returnsJson: "{\"type\":{\"fqn\":\"@alicloud/ros-cdk-ram.ManagedPolicy\"}}", parametersJson: "[{\"docs\":{\"summary\":\"The principal.\"},\"name\":\"identity\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-ram.IPrincipal\"}},{\"docs\":{\"summary\":\"Restrict the permission to a certain key pattern (default '*').\"},\"name\":\"objectsKeyPattern\",\"optional\":true,\"type\":{\"primitive\":\"string\"}}]")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Ram.ManagedPolicy GrantReadWrite(AlibabaCloud.SDK.ROS.CDK.Ram.IPrincipal identity, string? objectsKeyPattern = null)
        {
            return InvokeInstanceMethod<AlibabaCloud.SDK.ROS.CDK.Ram.ManagedPolicy>(new System.Type[]{typeof(AlibabaCloud.SDK.ROS.CDK.Ram.IPrincipal), typeof(string)}, new object?[]{identity, objectsKeyPattern})!;
        }

        /// <summary>Attribute Arn: The Alibaba Cloud Resource Name (ARN).</summary>
        [JsiiProperty(name: "attrArn", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrArn
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute DomainName: The public DNS name of the specified bucket.</summary>
        [JsiiProperty(name: "attrDomainName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrDomainName
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute InternalDomainName: The internal DNS name of the specified bucket.</summary>
        [JsiiProperty(name: "attrInternalDomainName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrInternalDomainName
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Name: The name of Bucket.</summary>
        [JsiiProperty(name: "attrName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrName
        {
            get => GetInstanceProperty<object>()!;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-oss.BucketProps\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Oss.IBucketProps Props
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Oss.IBucketProps>()!;
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
