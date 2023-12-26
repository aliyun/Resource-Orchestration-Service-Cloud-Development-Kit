using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Arms
{
    /// <summary>Properties for defining a `AlertContactGroup`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-alertcontactgroup
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IAlertContactGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-arms.AlertContactGroupProps")]
    public interface IAlertContactGroupProps
    {
        /// <summary>Property contactGroupName: The name of the alert contact group that you want to create.</summary>
        [JsiiProperty(name: "contactGroupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ContactGroupName
        {
            get;
        }

        /// <summary>Property contactIds: The list of alert contact ID.</summary>
        [JsiiProperty(name: "contactIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
        object ContactIds
        {
            get;
        }

        /// <summary>Property proxyUserId: Internal parameters.</summary>
        [JsiiProperty(name: "proxyUserId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ProxyUserId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property regionId: Region ID.</summary>
        /// <remarks>
        /// Default to region of stack.
        /// </remarks>
        [JsiiProperty(name: "regionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RegionId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `AlertContactGroup`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-alertcontactgroup
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IAlertContactGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-arms.AlertContactGroupProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Arms.IAlertContactGroupProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property contactGroupName: The name of the alert contact group that you want to create.</summary>
            [JsiiProperty(name: "contactGroupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ContactGroupName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property contactIds: The list of alert contact ID.</summary>
            [JsiiProperty(name: "contactIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
            public object ContactIds
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property proxyUserId: Internal parameters.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "proxyUserId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ProxyUserId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property regionId: Region ID.</summary>
            /// <remarks>
            /// Default to region of stack.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "regionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RegionId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
