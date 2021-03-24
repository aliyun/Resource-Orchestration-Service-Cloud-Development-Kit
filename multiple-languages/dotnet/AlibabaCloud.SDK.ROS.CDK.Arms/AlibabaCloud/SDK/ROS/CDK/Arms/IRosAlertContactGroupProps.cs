using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Arms
{
    /// <summary>Properties for defining a `ALIYUN::ARMS::AlertContactGroup`.</summary>
    [JsiiInterface(nativeType: typeof(IRosAlertContactGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-arms.RosAlertContactGroupProps")]
    public interface IRosAlertContactGroupProps
    {
        /// <remarks>
        /// <strong>Property</strong>: contactGroupName: The name of the alert contact group that you want to create.
        /// </remarks>
        [JsiiProperty(name: "contactGroupName", typeJson: "{\"primitive\":\"string\"}")]
        string ContactGroupName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: contactIds: The list of alert contact ID.
        /// </remarks>
        [JsiiProperty(name: "contactIds", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"number\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ContactIds
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: proxyUserId: Internal parameters
        /// </remarks>
        [JsiiProperty(name: "proxyUserId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? ProxyUserId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: regionId: Region ID. Default to region of stack.
        /// </remarks>
        [JsiiProperty(name: "regionId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? RegionId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::ARMS::AlertContactGroup`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosAlertContactGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-arms.RosAlertContactGroupProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Arms.IRosAlertContactGroupProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: contactGroupName: The name of the alert contact group that you want to create.
            /// </remarks>
            [JsiiProperty(name: "contactGroupName", typeJson: "{\"primitive\":\"string\"}")]
            public string ContactGroupName
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: contactIds: The list of alert contact ID.
            /// </remarks>
            [JsiiProperty(name: "contactIds", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"number\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ContactIds
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: proxyUserId: Internal parameters
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "proxyUserId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? ProxyUserId
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: regionId: Region ID. Default to region of stack.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "regionId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? RegionId
            {
                get => GetInstanceProperty<string?>();
            }
        }
    }
}
