using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Alb
{
    /// <summary>Properties for defining a `AclAssociation`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-alb-aclassociation
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IAclAssociationProps), fullyQualifiedName: "@alicloud/ros-cdk-alb.AclAssociationProps")]
    public interface IAclAssociationProps
    {
        /// <summary>Property aclIds: The IDs of the ACLs.</summary>
        /// <remarks>
        /// You can specify up to three IDs at a time.
        /// </remarks>
        [JsiiProperty(name: "aclIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
        object AclIds
        {
            get;
        }

        /// <summary>Property aclType: The type of ACL.</summary>
        [JsiiProperty(name: "aclType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AclType
        {
            get;
        }

        /// <summary>Property listenerId: The ID of the listener.</summary>
        [JsiiProperty(name: "listenerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ListenerId
        {
            get;
        }

        /// <summary>Properties for defining a `AclAssociation`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-alb-aclassociation
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IAclAssociationProps), fullyQualifiedName: "@alicloud/ros-cdk-alb.AclAssociationProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Alb.IAclAssociationProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property aclIds: The IDs of the ACLs.</summary>
            /// <remarks>
            /// You can specify up to three IDs at a time.
            /// </remarks>
            [JsiiProperty(name: "aclIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
            public object AclIds
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property aclType: The type of ACL.</summary>
            [JsiiProperty(name: "aclType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AclType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property listenerId: The ID of the listener.</summary>
            [JsiiProperty(name: "listenerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ListenerId
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
