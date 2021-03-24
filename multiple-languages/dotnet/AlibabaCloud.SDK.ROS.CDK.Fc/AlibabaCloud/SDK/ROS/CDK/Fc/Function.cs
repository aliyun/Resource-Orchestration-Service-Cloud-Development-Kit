using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Fc
{
    /// <summary>A ROS resource type:  `ALIYUN::FC::Function`.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Fc.Function), fullyQualifiedName: "@alicloud/ros-cdk-fc.Function", parametersJson: "[{\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-fc.FunctionProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"optional\":true,\"type\":{\"primitive\":\"boolean\"}}]")]
    public class Function : AlibabaCloud.SDK.ROS.CDK.Core.Resource_
    {
        /// <summary>Create a new `ALIYUN::FC::Function`.</summary>
        /// <remarks>
        /// Param scope - scope in which this resource is defined
        /// Param id    - scoped id of the resource
        /// Param props - resource properties
        /// </remarks>
        public Function(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Fc.IFunctionProps props, bool? enableResourcePropertyConstraint = null): base(new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint}))
        {
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

        /// <summary>Attribute ARN: The ARN for ALIYUN::ROS::CustomResource.</summary>
        [JsiiProperty(name: "attrArn", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrArn
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute FunctionId: The function ID.</summary>
        [JsiiProperty(name: "attrFunctionId", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrFunctionId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute FunctionName: The function name.</summary>
        [JsiiProperty(name: "attrFunctionName", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrFunctionName
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ServiceId: The service ID.</summary>
        [JsiiProperty(name: "attrServiceId", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrServiceId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ServiceName: The service name.</summary>
        [JsiiProperty(name: "attrServiceName", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrServiceName
        {
            get => GetInstanceProperty<object>()!;
        }
    }
}
