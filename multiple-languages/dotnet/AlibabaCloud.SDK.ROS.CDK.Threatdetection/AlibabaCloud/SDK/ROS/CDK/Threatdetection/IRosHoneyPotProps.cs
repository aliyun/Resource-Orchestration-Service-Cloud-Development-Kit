using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Threatdetection
{
    /// <summary>Properties for defining a `RosHoneyPot`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-honeypot
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosHoneyPotProps), fullyQualifiedName: "@alicloud/ros-cdk-threatdetection.RosHoneyPotProps")]
    public interface IRosHoneyPotProps
    {
        /// <remarks>
        /// <strong>Property</strong>: honeypotImageId: The ID of the honeypot image.
        /// > You can call the [ListAvailableHoneypot](~~ListAvailableHoneypot~~) operation to query the IDs of images from the **HoneypotImageId** response parameter.
        /// </remarks>
        [JsiiProperty(name: "honeypotImageId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object HoneypotImageId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: honeypotImageName: The name of the honeypot image.
        /// > You can call the [ListAvailableHoneypot](~~ListAvailableHoneypot~~) operation to query the names of images from the **HoneypotImageName** response parameter.
        /// </remarks>
        [JsiiProperty(name: "honeypotImageName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object HoneypotImageName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: honeypotName: The custom name of the honeypot.
        /// </remarks>
        [JsiiProperty(name: "honeypotName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object HoneypotName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: nodeId: The ID of the management node.
        /// > You can call the [ListHoneypotNode](~~ListHoneypotNode~~) operation to query the IDs of management nodes.
        /// </remarks>
        [JsiiProperty(name: "nodeId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object NodeId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: meta: Honeypot custom configuration. JSON format. Contains the following fields:
        /// - **trojan_git**:Git counterplan. Value:
        /// - **zip**:Git source package
        /// - **web**:.git directory leak
        /// - **close**: close
        /// - **trojan_git\_addr**:Git anti-control connection address
        /// - **Trojan_git.zip**:Git anti-Trojan package
        /// - **burp**:Burp counter. Value:
        /// - **open**: On
        /// - **close**: close
        /// - **portrait_option**: traceability configuration. Value:
        /// - **false**: Disabled
        /// - **true**: Enable.
        /// </remarks>
        [JsiiProperty(name: "meta", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Meta
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosHoneyPot`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-honeypot
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosHoneyPotProps), fullyQualifiedName: "@alicloud/ros-cdk-threatdetection.RosHoneyPotProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Threatdetection.IRosHoneyPotProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: honeypotImageId: The ID of the honeypot image.
            /// > You can call the [ListAvailableHoneypot](~~ListAvailableHoneypot~~) operation to query the IDs of images from the **HoneypotImageId** response parameter.
            /// </remarks>
            [JsiiProperty(name: "honeypotImageId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object HoneypotImageId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: honeypotImageName: The name of the honeypot image.
            /// > You can call the [ListAvailableHoneypot](~~ListAvailableHoneypot~~) operation to query the names of images from the **HoneypotImageName** response parameter.
            /// </remarks>
            [JsiiProperty(name: "honeypotImageName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object HoneypotImageName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: honeypotName: The custom name of the honeypot.
            /// </remarks>
            [JsiiProperty(name: "honeypotName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object HoneypotName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: nodeId: The ID of the management node.
            /// > You can call the [ListHoneypotNode](~~ListHoneypotNode~~) operation to query the IDs of management nodes.
            /// </remarks>
            [JsiiProperty(name: "nodeId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object NodeId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: meta: Honeypot custom configuration. JSON format. Contains the following fields:
            /// - **trojan_git**:Git counterplan. Value:
            /// - **zip**:Git source package
            /// - **web**:.git directory leak
            /// - **close**: close
            /// - **trojan_git\_addr**:Git anti-control connection address
            /// - **Trojan_git.zip**:Git anti-Trojan package
            /// - **burp**:Burp counter. Value:
            /// - **open**: On
            /// - **close**: close
            /// - **portrait_option**: traceability configuration. Value:
            /// - **false**: Disabled
            /// - **true**: Enable.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "meta", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
            public object? Meta
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
