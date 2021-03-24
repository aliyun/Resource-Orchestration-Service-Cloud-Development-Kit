using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Arms
{
    /// <summary>Properties for defining a `ALIYUN::ARMS::AlertContactGroup`.</summary>
    [JsiiInterface(nativeType: typeof(IAlertContactGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-arms.AlertContactGroupProps")]
    public interface IAlertContactGroupProps
    {
        /// <summary>Property contactGroupName: The name of the alert contact group that you want to create.</summary>
        [JsiiProperty(name: "contactGroupName", typeJson: "{\"primitive\":\"string\"}")]
        string ContactGroupName
        {
            get;
        }

        /// <summary>Property contactIds: The list of alert contact ID.</summary>
        [JsiiProperty(name: "contactIds", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"number\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ContactIds
        {
            get;
        }

        /// <summary>Property proxyUserId: Internal parameters.</summary>
        [JsiiProperty(name: "proxyUserId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? ProxyUserId
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
        [JsiiTypeProxy(nativeType: typeof(IAlertContactGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-arms.AlertContactGroupProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Arms.IAlertContactGroupProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property contactGroupName: The name of the alert contact group that you want to create.</summary>
            [JsiiProperty(name: "contactGroupName", typeJson: "{\"primitive\":\"string\"}")]
            public string ContactGroupName
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property contactIds: The list of alert contact ID.</summary>
            [JsiiProperty(name: "contactIds", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"number\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ContactIds
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property proxyUserId: Internal parameters.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "proxyUserId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? ProxyUserId
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property regionId: Region ID.</summary>
            /// <remarks>
            /// Default to region of stack.
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
