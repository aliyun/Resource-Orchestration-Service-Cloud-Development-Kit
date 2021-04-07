using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Apigateway
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::ApiGateway::Api`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-apigateway.RosApiProps")]
    public class RosApiProps : AlibabaCloud.SDK.ROS.CDK.Apigateway.IRosApiProps
    {
        /// <remarks>
        /// <strong>Property</strong>: apiName: The name of the API.Need [4, 50] Chinese\English\Number characters or "_",and should start with Chinese/English character.
        /// </remarks>
        [JsiiProperty(name: "apiName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object ApiName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: groupId: The id of the Group.
        /// </remarks>
        [JsiiProperty(name: "groupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object GroupId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: requestConfig: The configuration of the request
        /// </remarks>
        [JsiiProperty(name: "requestConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-apigateway.RosApi.RequestConfigProperty\"}]}}", isOverride: true)]
        public object RequestConfig
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: resultSample: The sample of the result.
        /// </remarks>
        [JsiiProperty(name: "resultSample", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object ResultSample
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: resultType: The format of service's response, "JSON", "TEXT", "BINARY", "XML", "HTML" or "PASSTHROUGH". Default is "JSON".
        /// </remarks>
        [JsiiProperty(name: "resultType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object ResultType
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: serviceConfig: The configuration of the service.
        /// </remarks>
        [JsiiProperty(name: "serviceConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-apigateway.RosApi.ServiceConfigProperty\"}]}}", isOverride: true)]
        public object ServiceConfig
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: visibility: Whether to make the API public. "PUBLIC" or "PRIVATE".
        /// </remarks>
        [JsiiProperty(name: "visibility", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object Visibility
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: appCodeAuthType: When AuthType is APP authentication, the optional values are as follows: If not passed, the default value is DEFAULT:
        /// DEFAULT: Default (set by group).
        /// DISABLE: Not allowed
        /// HEADER: Allow AppCode header authentication
        /// HEADER_QUERY: Allow AppCode header and query authentication
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "appCodeAuthType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? AppCodeAuthType
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: authType: Type of authorization of the API . "APP","ANONYMOUS", or "APPOPENID"
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "authType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? AuthType
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: constParameters: The const parameters.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "constParameters", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-apigateway.RosApi.ConstParametersProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true, isOverride: true)]
        public object? ConstParameters
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: description: Description of the API, less than 180 characters.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? Description
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: disableInternet: Set DisableInternet to true, only support intranet to call API.
        /// Set DisableInternet to false, then the call is not restricted.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "disableInternet", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? DisableInternet
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: errorCodeSamples: The Error Code samples.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "errorCodeSamples", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-apigateway.RosApi.ErrorCodeSamplesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true, isOverride: true)]
        public object? ErrorCodeSamples
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: failResultSample: The sample of the fail result.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "failResultSample", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? FailResultSample
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: forceNonceCheck: Set ForceNonceCheck to true, compulsorily check X-Ca-Nonce when requesting,
        /// this is the unique identifier of the request, generally using UUID to identify.
        /// The API gateway will verify the validity of this parameter after receiving this parameter.
        /// The same value can only be used once within 15 minutes. It can effectively prevent API replay attacks.
        /// Set ForceNonceCheck to false, then no check.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "forceNonceCheck", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? ForceNonceCheck
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: openIdConnectConfig: The configuration of the open id.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "openIdConnectConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-apigateway.RosApi.OpenIdConnectConfigProperty\"}]}}", isOptional: true, isOverride: true)]
        public object? OpenIdConnectConfig
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: requestParameters: The request parameters.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "requestParameters", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-apigateway.RosApi.RequestParametersProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true, isOverride: true)]
        public object? RequestParameters
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: serviceParameters: The service parameters.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "serviceParameters", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-apigateway.RosApi.ServiceParametersProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true, isOverride: true)]
        public object? ServiceParameters
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: serviceParametersMap: The mapping relation between (request parameters\const parameters\system parameters) and service parameters.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "serviceParametersMap", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-apigateway.RosApi.ServiceParametersMapProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true, isOverride: true)]
        public object? ServiceParametersMap
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: systemParameters: The system parameters.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "systemParameters", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-apigateway.RosApi.SystemParametersProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true, isOverride: true)]
        public object? SystemParameters
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-apigateway.RosApi.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true, isOverride: true)]
        public AlibabaCloud.SDK.ROS.CDK.Apigateway.RosApi.ITagsProperty[]? Tags
        {
            get;
            set;
        }
    }
}
