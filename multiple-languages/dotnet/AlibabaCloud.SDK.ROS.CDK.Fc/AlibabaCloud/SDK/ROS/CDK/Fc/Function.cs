using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Fc
{
    /// <summary>This class encapsulates and extends the ROS resource type `ALIYUN::FC::Function`.</summary>
    /// <remarks>
    /// <strong>Note</strong>: This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosFunction`for a more convenient development experience.
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc-function
    /// </remarks>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Fc.Function), fullyQualifiedName: "@alicloud/ros-cdk-fc.Function", parametersJson: "[{\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-fc.FunctionProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"optional\":true,\"type\":{\"primitive\":\"boolean\"}}]")]
    public class Function : AlibabaCloud.SDK.ROS.CDK.Core.Resource_, AlibabaCloud.SDK.ROS.CDK.Fc.IFunction
    {
        /// <summary>Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.</summary>
        public Function(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Fc.IFunctionProps props, bool? enableResourcePropertyConstraint = null): base(_MakeDeputyProps(scope, id, props, enableResourcePropertyConstraint))
        {
        }

        [System.Runtime.CompilerServices.MethodImpl(System.Runtime.CompilerServices.MethodImplOptions.AggressiveInlining)]
        private static DeputyProps _MakeDeputyProps(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Fc.IFunctionProps props, bool? enableResourcePropertyConstraint = null)
        {
            return new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint});
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected Function(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected Function(DeputyProps props): base(props)
        {
        }

        /// <summary>Loads the fcFunction code from a local disk path.</summary>
        /// <param name="path">Either a directory with the Lambda code bundle or a .zip file.</param>
        [JsiiMethod(name: "codeFromAsset", parametersJson: "[{\"docs\":{\"summary\":\"Either a directory with the Lambda code bundle or a .zip file.\"},\"name\":\"path\",\"type\":{\"primitive\":\"string\"}}]")]
        public virtual void CodeFromAsset(string path)
        {
            InvokeInstanceVoidMethod(new System.Type[]{typeof(string)}, new object[]{path});
        }

        /// <summary>Function handler code as an OSS object.</summary>
        /// <param name="bucket">The OSS bucket.</param>
        /// <param name="key">The object key.</param>
        [JsiiMethod(name: "codeFromBucket", parametersJson: "[{\"docs\":{\"summary\":\"The OSS bucket.\"},\"name\":\"bucket\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-oss.Bucket\"}},{\"docs\":{\"summary\":\"The object key.\"},\"name\":\"key\",\"type\":{\"primitive\":\"string\"}}]")]
        public virtual void CodeFromBucket(AlibabaCloud.SDK.ROS.CDK.Oss.Bucket bucket, string key)
        {
            InvokeInstanceVoidMethod(new System.Type[]{typeof(AlibabaCloud.SDK.ROS.CDK.Oss.Bucket), typeof(string)}, new object[]{bucket, key});
        }

        /// <summary>Inline code for FC fcFunction handler.</summary>
        /// <param name="code">The actual handler code (limited to 4KiB).</param>
        [JsiiMethod(name: "codeFromInline", parametersJson: "[{\"docs\":{\"summary\":\"The actual handler code (limited to 4KiB).\"},\"name\":\"code\",\"type\":{\"primitive\":\"string\"}}]")]
        public virtual void CodeFromInline(string code)
        {
            InvokeInstanceVoidMethod(new System.Type[]{typeof(string)}, new object[]{code});
        }

        /// <summary>Attribute ARN: The ARN for ALIYUN::ROS::CustomResource.</summary>
        [JsiiProperty(name: "attrArn", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrArn
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute FunctionId: The function ID.</summary>
        [JsiiProperty(name: "attrFunctionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrFunctionId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute FunctionName: The function name.</summary>
        [JsiiProperty(name: "attrFunctionName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrFunctionName
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ServiceId: The service ID.</summary>
        [JsiiProperty(name: "attrServiceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrServiceId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ServiceName: The service name.</summary>
        [JsiiProperty(name: "attrServiceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrServiceName
        {
            get => GetInstanceProperty<object>()!;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-fc.FunctionProps\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Fc.IFunctionProps Props
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Fc.IFunctionProps>()!;
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
