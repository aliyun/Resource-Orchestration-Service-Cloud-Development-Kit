using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Mns
{
    /// <summary>This class encapsulates and extends the ROS resource type `ALIYUN::MNS::Queue`.</summary>
    /// <remarks>
    /// <strong>Note</strong>: This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosQueue`for a more convenient development experience.
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mns-queue
    /// </remarks>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Mns.Queue), fullyQualifiedName: "@alicloud/ros-cdk-mns.Queue", parametersJson: "[{\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-mns.QueueProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"optional\":true,\"type\":{\"primitive\":\"boolean\"}}]")]
    public class Queue : AlibabaCloud.SDK.ROS.CDK.Core.Resource_, AlibabaCloud.SDK.ROS.CDK.Mns.IQueue
    {
        /// <summary>Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.</summary>
        public Queue(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Mns.IQueueProps props, bool? enableResourcePropertyConstraint = null): base(_MakeDeputyProps(scope, id, props, enableResourcePropertyConstraint))
        {
        }

        [System.Runtime.CompilerServices.MethodImpl(System.Runtime.CompilerServices.MethodImplOptions.AggressiveInlining)]
        private static DeputyProps _MakeDeputyProps(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Mns.IQueueProps props, bool? enableResourcePropertyConstraint = null)
        {
            return new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint});
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected Queue(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected Queue(DeputyProps props): base(props)
        {
        }

        [JsiiMethod(name: "fromQueueArn", returnsJson: "{\"type\":{\"fqn\":\"@alicloud/ros-cdk-mns.IQueue\"}}", parametersJson: "[{\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"attrArnWithSlash\",\"type\":{\"primitive\":\"string\"}}]")]
        public static AlibabaCloud.SDK.ROS.CDK.Mns.IQueue FromQueueArn(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, string attrArnWithSlash)
        {
            return InvokeStaticMethod<AlibabaCloud.SDK.ROS.CDK.Mns.IQueue>(typeof(AlibabaCloud.SDK.ROS.CDK.Mns.Queue), new System.Type[]{typeof(AlibabaCloud.SDK.ROS.CDK.Core.Construct), typeof(string), typeof(string)}, new object[]{scope, id, attrArnWithSlash})!;
        }

        /// <summary>Import an existing queue.</summary>
        [JsiiMethod(name: "fromQueueAttributes", returnsJson: "{\"type\":{\"fqn\":\"@alicloud/ros-cdk-mns.IQueue\"}}", parametersJson: "[{\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"attrs\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-mns.QueueAttributes\"}}]")]
        public static AlibabaCloud.SDK.ROS.CDK.Mns.IQueue FromQueueAttributes(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Mns.IQueueAttributes attrs)
        {
            return InvokeStaticMethod<AlibabaCloud.SDK.ROS.CDK.Mns.IQueue>(typeof(AlibabaCloud.SDK.ROS.CDK.Mns.Queue), new System.Type[]{typeof(AlibabaCloud.SDK.ROS.CDK.Core.Construct), typeof(string), typeof(AlibabaCloud.SDK.ROS.CDK.Mns.IQueueAttributes)}, new object[]{scope, id, attrs})!;
        }

        /// <summary>Attribute ARN.WithSlash: The ARN: acs:mns:$region:$accountid:/queues/$queueName.</summary>
        [JsiiProperty(name: "attrArnWithSlash", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrArnWithSlash
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute QueueName: Queue name.</summary>
        [JsiiProperty(name: "attrQueueName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrQueueName
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute QueueUrl: URL of created queue.</summary>
        [JsiiProperty(name: "attrQueueUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrQueueUrl
        {
            get => GetInstanceProperty<object>()!;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-mns.QueueProps\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Mns.IQueueProps Props
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Mns.IQueueProps>()!;
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
