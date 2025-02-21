using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecd
{
    /// <summary>Properties for defining a `UserDesktopGroupAddition`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecd-userdesktopgroupaddition
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IUserDesktopGroupAdditionProps), fullyQualifiedName: "@alicloud/ros-cdk-ecd.UserDesktopGroupAdditionProps")]
    public interface IUserDesktopGroupAdditionProps
    {
        /// <summary>Property desktopGroupId: The ID of the desktop group that you want to assign to more regular users.</summary>
        [JsiiProperty(name: "desktopGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DesktopGroupId
        {
            get;
        }

        /// <summary>Property endUserIds: The regular users to whom you want to assign the desktop group.</summary>
        [JsiiProperty(name: "endUserIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
        object EndUserIds
        {
            get;
        }

        /// <summary>Properties for defining a `UserDesktopGroupAddition`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecd-userdesktopgroupaddition
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IUserDesktopGroupAdditionProps), fullyQualifiedName: "@alicloud/ros-cdk-ecd.UserDesktopGroupAdditionProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ecd.IUserDesktopGroupAdditionProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property desktopGroupId: The ID of the desktop group that you want to assign to more regular users.</summary>
            [JsiiProperty(name: "desktopGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DesktopGroupId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property endUserIds: The regular users to whom you want to assign the desktop group.</summary>
            [JsiiProperty(name: "endUserIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
            public object EndUserIds
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
