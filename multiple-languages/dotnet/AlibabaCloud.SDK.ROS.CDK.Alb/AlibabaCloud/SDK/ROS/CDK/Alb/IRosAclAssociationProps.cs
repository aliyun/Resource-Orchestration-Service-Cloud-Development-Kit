using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Alb
{
    /// <summary>Properties for defining a `ALIYUN::ALB::AclAssociation`.</summary>
    [JsiiInterface(nativeType: typeof(IRosAclAssociationProps), fullyQualifiedName: "@alicloud/ros-cdk-alb.RosAclAssociationProps")]
    public interface IRosAclAssociationProps
    {
        /// <remarks>
        /// <strong>Property</strong>: aclIds: The IDs of the ACLs. You can specify up to three IDs at a time.
        /// </remarks>
        [JsiiProperty(name: "aclIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
        object AclIds
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: aclType: The type of ACL.
        /// </remarks>
        [JsiiProperty(name: "aclType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AclType
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: listenerId: The ID of the listener.
        /// </remarks>
        [JsiiProperty(name: "listenerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ListenerId
        {
            get;
        }

        /// <summary>Properties for defining a `ALIYUN::ALB::AclAssociation`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosAclAssociationProps), fullyQualifiedName: "@alicloud/ros-cdk-alb.RosAclAssociationProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Alb.IRosAclAssociationProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: aclIds: The IDs of the ACLs. You can specify up to three IDs at a time.
            /// </remarks>
            [JsiiProperty(name: "aclIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
            public object AclIds
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: aclType: The type of ACL.
            /// </remarks>
            [JsiiProperty(name: "aclType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AclType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: listenerId: The ID of the listener.
            /// </remarks>
            [JsiiProperty(name: "listenerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ListenerId
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
