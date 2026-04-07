using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Resourcemanager
{
    /// <summary>Properties for defining a `RosMessageContact`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-messagecontact
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosMessageContactProps), fullyQualifiedName: "@alicloud/ros-cdk-resourcemanager.RosMessageContactProps")]
    public interface IRosMessageContactProps
    {
        /// <remarks>
        /// <strong>Property</strong>: emailAddress: The email address of the contact.
        /// </remarks>
        [JsiiProperty(name: "emailAddress", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object EmailAddress
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: messageContactName: The name of the contact. The name must be unique in your resource directory. The name must be 2 to 12 characters in length and can contain only letters.
        /// </remarks>
        [JsiiProperty(name: "messageContactName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object MessageContactName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: messageTypes: The types of messages received by the contact.
        /// </remarks>
        [JsiiProperty(name: "messageTypes", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
        object MessageTypes
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: title: The job title of the contact. Valid values:
        /// * FinanceDirector.
        /// * TechnicalDirector.
        /// * MaintenanceDirector.
        /// * CEO.
        /// * ProjectDirector.
        /// * Other.
        /// </remarks>
        [JsiiProperty(name: "title", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Title
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: phoneNumber: The mobile phone number of the contact.
        /// </remarks>
        [JsiiProperty(name: "phoneNumber", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PhoneNumber
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosMessageContact`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-messagecontact
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosMessageContactProps), fullyQualifiedName: "@alicloud/ros-cdk-resourcemanager.RosMessageContactProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Resourcemanager.IRosMessageContactProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: emailAddress: The email address of the contact.
            /// </remarks>
            [JsiiProperty(name: "emailAddress", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object EmailAddress
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: messageContactName: The name of the contact. The name must be unique in your resource directory. The name must be 2 to 12 characters in length and can contain only letters.
            /// </remarks>
            [JsiiProperty(name: "messageContactName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object MessageContactName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: messageTypes: The types of messages received by the contact.
            /// </remarks>
            [JsiiProperty(name: "messageTypes", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
            public object MessageTypes
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: title: The job title of the contact. Valid values:
            /// * FinanceDirector.
            /// * TechnicalDirector.
            /// * MaintenanceDirector.
            /// * CEO.
            /// * ProjectDirector.
            /// * Other.
            /// </remarks>
            [JsiiProperty(name: "title", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Title
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: phoneNumber: The mobile phone number of the contact.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "phoneNumber", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PhoneNumber
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
