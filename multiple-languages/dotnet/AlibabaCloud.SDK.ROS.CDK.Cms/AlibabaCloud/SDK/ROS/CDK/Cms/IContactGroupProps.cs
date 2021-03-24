using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cms
{
    /// <summary>Properties for defining a `ALIYUN::CMS::ContactGroup`.</summary>
    [JsiiInterface(nativeType: typeof(IContactGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-cms.ContactGroupProps")]
    public interface IContactGroupProps
    {
        /// <summary>Property contactGroupName: The name of the alert contact group.</summary>
        [JsiiProperty(name: "contactGroupName", typeJson: "{\"primitive\":\"string\"}")]
        string ContactGroupName
        {
            get;
        }

        /// <summary>Property contactNames: The name of the alert contact.</summary>
        [JsiiProperty(name: "contactNames", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}")]
        string[] ContactNames
        {
            get;
        }

        /// <summary>Property describe: The description of the alert contact group.</summary>
        [JsiiProperty(name: "describe", typeJson: "{\"primitive\":\"string\"}")]
        string Describe
        {
            get;
        }

        /// <summary>Properties for defining a `ALIYUN::CMS::ContactGroup`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IContactGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-cms.ContactGroupProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cms.IContactGroupProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property contactGroupName: The name of the alert contact group.</summary>
            [JsiiProperty(name: "contactGroupName", typeJson: "{\"primitive\":\"string\"}")]
            public string ContactGroupName
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property contactNames: The name of the alert contact.</summary>
            [JsiiProperty(name: "contactNames", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}")]
            public string[] ContactNames
            {
                get => GetInstanceProperty<string[]>()!;
            }

            /// <summary>Property describe: The description of the alert contact group.</summary>
            [JsiiProperty(name: "describe", typeJson: "{\"primitive\":\"string\"}")]
            public string Describe
            {
                get => GetInstanceProperty<string>()!;
            }
        }
    }
}
