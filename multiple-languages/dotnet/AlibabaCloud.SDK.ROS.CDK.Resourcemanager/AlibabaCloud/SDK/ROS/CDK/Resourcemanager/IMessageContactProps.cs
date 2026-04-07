using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Resourcemanager
{
    /// <summary>Properties for defining a `MessageContact`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-messagecontact
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IMessageContactProps), fullyQualifiedName: "@alicloud/ros-cdk-resourcemanager.MessageContactProps")]
    public interface IMessageContactProps
    {
        /// <summary>Property emailAddress: The email address of the contact.</summary>
        [JsiiProperty(name: "emailAddress", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object EmailAddress
        {
            get;
        }

        /// <summary>Property messageContactName: The name of the contact.</summary>
        /// <remarks>
        /// The name must be unique in your resource directory. The name must be 2 to 12 characters in length and can contain only letters.
        /// </remarks>
        [JsiiProperty(name: "messageContactName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object MessageContactName
        {
            get;
        }

        /// <summary>Property messageTypes: The types of messages received by the contact.</summary>
        [JsiiProperty(name: "messageTypes", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
        object MessageTypes
        {
            get;
        }

        /// <summary>Property title: The job title of the contact.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description>FinanceDirector.</description>
        /// <description>TechnicalDirector.</description>
        /// <description>MaintenanceDirector.</description>
        /// <description>CEO.</description>
        /// <description>ProjectDirector.</description>
        /// <description>Other.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "title", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Title
        {
            get;
        }

        /// <summary>Property phoneNumber: The mobile phone number of the contact.</summary>
        [JsiiProperty(name: "phoneNumber", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PhoneNumber
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `MessageContact`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-messagecontact
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IMessageContactProps), fullyQualifiedName: "@alicloud/ros-cdk-resourcemanager.MessageContactProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Resourcemanager.IMessageContactProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property emailAddress: The email address of the contact.</summary>
            [JsiiProperty(name: "emailAddress", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object EmailAddress
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property messageContactName: The name of the contact.</summary>
            /// <remarks>
            /// The name must be unique in your resource directory. The name must be 2 to 12 characters in length and can contain only letters.
            /// </remarks>
            [JsiiProperty(name: "messageContactName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object MessageContactName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property messageTypes: The types of messages received by the contact.</summary>
            [JsiiProperty(name: "messageTypes", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
            public object MessageTypes
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property title: The job title of the contact.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description>FinanceDirector.</description>
            /// <description>TechnicalDirector.</description>
            /// <description>MaintenanceDirector.</description>
            /// <description>CEO.</description>
            /// <description>ProjectDirector.</description>
            /// <description>Other.</description>
            /// </list>
            /// </remarks>
            [JsiiProperty(name: "title", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Title
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property phoneNumber: The mobile phone number of the contact.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "phoneNumber", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PhoneNumber
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
