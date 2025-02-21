using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecd
{
    /// <summary>Properties for defining a `RosUserDesktopGroupAddition`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecd-userdesktopgroupaddition
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosUserDesktopGroupAdditionProps), fullyQualifiedName: "@alicloud/ros-cdk-ecd.RosUserDesktopGroupAdditionProps")]
    public interface IRosUserDesktopGroupAdditionProps
    {
        /// <remarks>
        /// <strong>Property</strong>: desktopGroupId: The ID of the desktop group that you want to assign to more regular users.
        /// </remarks>
        [JsiiProperty(name: "desktopGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DesktopGroupId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: endUserIds: The regular users to whom you want to assign the desktop group.
        /// </remarks>
        [JsiiProperty(name: "endUserIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
        object EndUserIds
        {
            get;
        }

        /// <summary>Properties for defining a `RosUserDesktopGroupAddition`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecd-userdesktopgroupaddition
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosUserDesktopGroupAdditionProps), fullyQualifiedName: "@alicloud/ros-cdk-ecd.RosUserDesktopGroupAdditionProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ecd.IRosUserDesktopGroupAdditionProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: desktopGroupId: The ID of the desktop group that you want to assign to more regular users.
            /// </remarks>
            [JsiiProperty(name: "desktopGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DesktopGroupId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: endUserIds: The regular users to whom you want to assign the desktop group.
            /// </remarks>
            [JsiiProperty(name: "endUserIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
            public object EndUserIds
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
