using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ros
{
    /// <summary>A ROS template type:  `ALIYUN::ROS::CustomResource`.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Ros.RosCustomResource), fullyQualifiedName: "@alicloud/ros-cdk-ros.RosCustomResource", parametersJson: "[{\"docs\":{\"summary\":\"- scope in which this resource is defined.\"},\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"docs\":{\"summary\":\"- scoped id of the resource.\"},\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"docs\":{\"summary\":\"- resource properties.\"},\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-ros.RosCustomResourceProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"type\":{\"primitive\":\"boolean\"}}]")]
    public class RosCustomResource : AlibabaCloud.SDK.ROS.CDK.Core.RosResource
    {
        /// <summary>Create a new `ALIYUN::ROS::CustomResource`.</summary>
        /// <param name="scope">- scope in which this resource is defined.</param>
        /// <param name="id">- scoped id of the resource.</param>
        /// <param name="props">- resource properties.</param>
        public RosCustomResource(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Ros.IRosCustomResourceProps props, bool enableResourcePropertyConstraint): base(new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint}))
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosCustomResource(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosCustomResource(DeputyProps props): base(props)
        {
        }

        [JsiiMethod(name: "renderProperties", returnsJson: "{\"type\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}}", parametersJson: "[{\"name\":\"props\",\"type\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}}]")]
        protected override System.Collections.Generic.IDictionary<string, object> RenderProperties(System.Collections.Generic.IDictionary<string, object> props)
        {
            return InvokeInstanceMethod<System.Collections.Generic.IDictionary<string, object>>(new System.Type[]{typeof(System.Collections.Generic.IDictionary<string, object>)}, new object[]{props})!;
        }

        /// <summary>The resource type name for this resource class.</summary>
        [JsiiProperty(name: "ROS_RESOURCE_TYPE_NAME", typeJson: "{\"primitive\":\"string\"}")]
        public static string ROS_RESOURCE_TYPE_NAME
        {
            get;
        }
        = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Ros.RosCustomResource))!;

        /// <remarks>
        /// <strong>Attribute</strong>: Outputs: Output data received from service provider.
        /// </remarks>
        [JsiiProperty(name: "attrOutputs", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrOutputs
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        [JsiiProperty(name: "rosProperties", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}")]
        protected override System.Collections.Generic.IDictionary<string, object> RosProperties
        {
            get => GetInstanceProperty<System.Collections.Generic.IDictionary<string, object>>()!;
        }

        [JsiiProperty(name: "enableResourcePropertyConstraint", typeJson: "{\"primitive\":\"boolean\"}")]
        public virtual bool EnableResourcePropertyConstraint
        {
            get => GetInstanceProperty<bool>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: serviceToken: The service token that was given to the template developer by the service provider to access the service.
        /// Allowed values:
        /// - Function Compute: acs:fc:<region_id>:<account_id>:services/<service_name>/functions/<function_name>
        /// - MNS Queue: acs:mns:<region_id>:<account_id>:queues/<queue_name> or acs:mns:<region_id>:<account_id>:/queues/<queue_name>
        /// - MNS Topic: acs:mns:<region_id>:<account_id>:topics/<topic_name> or acs:mns:<region_id>:<account_id>:/topics/<topic_name>
        /// - HTTP&HTTPS: web[options]:<url>
        /// Two options are supported:
        /// - sync: sync HTTP&HTTPS request.
        /// - idempotent: indicates that the Create request is idempotent. Update and Delete requests should be always idempotent.
        /// Examples:
        /// - acs:fc:cn-hangzhou:123456789:services/test-service/functions/test-function
        /// - acs:mns:cn-hangzhou:123456789:queues/test-queue
        /// - acs:mns:cn-hangzhou:123456789:/queues/test-queue
        /// - acs:mns:cn-hangzhou:123456789:topics/test-topic
        /// - acs:mns:cn-hangzhou:123456789:/topics/test-topic
        /// - web:https://abc.com
        /// - web[sync]:http://abc.com
        /// - web[sync,idempotent]:https://abc.com
        /// </remarks>
        [JsiiProperty(name: "serviceToken", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object ServiceToken
        {
            get => GetInstanceProperty<object>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: timeout: Timeout seconds before service provider responses.
        /// It takes effects only if the type of ServiceToken is Function Compute, MNS Queue, MNS Topic or async HTTP&HTTPS request.
        /// Timeout seconds are always 10 for sync HTTP&HTTPS request.
        /// </remarks>
        [JsiiProperty(name: "timeout", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object Timeout
        {
            get => GetInstanceProperty<object>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: httpConfig: Config for HTTP&HTTPS service provider.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "httpConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ros.RosCustomResource.HttpConfigProperty\"}]}}", isOptional: true)]
        public virtual object? HttpConfig
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: parameters: Parameters to be passed to service provider.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "parameters", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
        public virtual object? Parameters
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }
        [JsiiInterface(nativeType: typeof(IHttpConfigProperty), fullyQualifiedName: "@alicloud/ros-cdk-ros.RosCustomResource.HttpConfigProperty")]
        public interface IHttpConfigProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: contentType: Content type of request body.
            /// </remarks>
            [JsiiProperty(name: "contentType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? ContentType
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: headers: Headers to be passed.
            /// </remarks>
            [JsiiProperty(name: "headers", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Headers
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: signKey: If SignKey is specified, Signature will be added to request data.
            /// "Signature": {
            /// "Date": "2021-03-11T13:32:02Z",
            /// "Value": "10841498499ba1c4b07547a542c3a8718235f983"
            /// }
            /// Date: the UTC time to send request, which follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format.
            /// Value: the signature value calculated from the algorithm below.
            ///
            /// The signature algorithm:
            /// 1.Concatenating signature string:POST
            /// \n
            /// <content type: if ContentType is specified, use it, else use application/json.>
            /// \n
            /// <md5 of request data: without Signature, json format, utf-8 encoded, sort keys, ensure ascii.>
            /// \n
            /// <Date in Signature>
            /// \n
            /// <header 1 key: sort in alphabetical order>:<header 1 value>
            /// \n
            /// ...<header N key>:<header 2 value>
            /// \n
            /// <url in ServiceToken: such as https://abc.com>
            /// 2.calculate signature with sha1.
            /// </remarks>
            [JsiiProperty(name: "signKey", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? SignKey
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IHttpConfigProperty), fullyQualifiedName: "@alicloud/ros-cdk-ros.RosCustomResource.HttpConfigProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ros.RosCustomResource.IHttpConfigProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: contentType: Content type of request body.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "contentType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? ContentType
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: headers: Headers to be passed.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "headers", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
                public object? Headers
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: signKey: If SignKey is specified, Signature will be added to request data.
                /// "Signature": {
                /// "Date": "2021-03-11T13:32:02Z",
                /// "Value": "10841498499ba1c4b07547a542c3a8718235f983"
                /// }
                /// Date: the UTC time to send request, which follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format.
                /// Value: the signature value calculated from the algorithm below.
                ///
                /// The signature algorithm:
                /// 1.Concatenating signature string:POST
                /// \n
                /// <content type: if ContentType is specified, use it, else use application/json.>
                /// \n
                /// <md5 of request data: without Signature, json format, utf-8 encoded, sort keys, ensure ascii.>
                /// \n
                /// <Date in Signature>
                /// \n
                /// <header 1 key: sort in alphabetical order>:<header 1 value>
                /// \n
                /// ...<header N key>:<header 2 value>
                /// \n
                /// <url in ServiceToken: such as https://abc.com>
                /// 2.calculate signature with sha1.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "signKey", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? SignKey
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-ros.RosCustomResource.HttpConfigProperty")]
        public class HttpConfigProperty : AlibabaCloud.SDK.ROS.CDK.Ros.RosCustomResource.IHttpConfigProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: contentType: Content type of request body.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "contentType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ContentType
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: headers: Headers to be passed.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "headers", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
            public object? Headers
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: signKey: If SignKey is specified, Signature will be added to request data.
            /// "Signature": {
            /// "Date": "2021-03-11T13:32:02Z",
            /// "Value": "10841498499ba1c4b07547a542c3a8718235f983"
            /// }
            /// Date: the UTC time to send request, which follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format.
            /// Value: the signature value calculated from the algorithm below.
            ///
            /// The signature algorithm:
            /// 1.Concatenating signature string:POST
            /// \n
            /// <content type: if ContentType is specified, use it, else use application/json.>
            /// \n
            /// <md5 of request data: without Signature, json format, utf-8 encoded, sort keys, ensure ascii.>
            /// \n
            /// <Date in Signature>
            /// \n
            /// <header 1 key: sort in alphabetical order>:<header 1 value>
            /// \n
            /// ...<header N key>:<header 2 value>
            /// \n
            /// <url in ServiceToken: such as https://abc.com>
            /// 2.calculate signature with sha1.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "signKey", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SignKey
            {
                get;
                set;
            }
        }
    }
}
