using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cms
{
    /// <summary>Properties for defining a `ALIYUN::CMS::ContactGroup`.</summary>
    [JsiiInterface(nativeType: typeof(IContactGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-cms.ContactGroupProps")]
    public interface IContactGroupProps
    {
        /// <summary>Property contactGroupName: The name of the alert contact group.</summary>
        [JsiiProperty(name: "contactGroupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ContactGroupName
        {
            get;
        }

        /// <summary>Property contactNames: The name of the alert contact.</summary>
        [JsiiProperty(name: "contactNames", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
        object ContactNames
        {
            get;
        }

        /// <summary>Property describe: The description of the alert contact group.</summary>
        [JsiiProperty(name: "describe", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Describe
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
            [JsiiProperty(name: "contactGroupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ContactGroupName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property contactNames: The name of the alert contact.</summary>
            [JsiiProperty(name: "contactNames", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
            public object ContactNames
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property describe: The description of the alert contact group.</summary>
            [JsiiProperty(name: "describe", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Describe
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
