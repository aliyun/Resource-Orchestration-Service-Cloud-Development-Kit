using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cms
{
    /// <summary>Properties for defining a `ALIYUN::CMS::ContactGroup`.</summary>
    [JsiiInterface(nativeType: typeof(IRosContactGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-cms.RosContactGroupProps")]
    public interface IRosContactGroupProps
    {
        /// <remarks>
        /// <strong>Property</strong>: contactGroupName: The name of the alert contact group.
        /// </remarks>
        [JsiiProperty(name: "contactGroupName", typeJson: "{\"primitive\":\"string\"}")]
        string ContactGroupName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: contactNames: The name of the alert contact.
        /// </remarks>
        [JsiiProperty(name: "contactNames", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}")]
        string[] ContactNames
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: describe: The description of the alert contact group.
        /// </remarks>
        [JsiiProperty(name: "describe", typeJson: "{\"primitive\":\"string\"}")]
        string Describe
        {
            get;
        }

        /// <summary>Properties for defining a `ALIYUN::CMS::ContactGroup`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosContactGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-cms.RosContactGroupProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cms.IRosContactGroupProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: contactGroupName: The name of the alert contact group.
            /// </remarks>
            [JsiiProperty(name: "contactGroupName", typeJson: "{\"primitive\":\"string\"}")]
            public string ContactGroupName
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: contactNames: The name of the alert contact.
            /// </remarks>
            [JsiiProperty(name: "contactNames", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}")]
            public string[] ContactNames
            {
                get => GetInstanceProperty<string[]>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: describe: The description of the alert contact group.
            /// </remarks>
            [JsiiProperty(name: "describe", typeJson: "{\"primitive\":\"string\"}")]
            public string Describe
            {
                get => GetInstanceProperty<string>()!;
            }
        }
    }
}
