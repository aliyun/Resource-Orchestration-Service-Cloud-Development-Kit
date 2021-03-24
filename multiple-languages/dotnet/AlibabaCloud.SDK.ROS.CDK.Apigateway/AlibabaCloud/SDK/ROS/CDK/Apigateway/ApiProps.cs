using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Apigateway
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::ApiGateway::Api`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-apigateway.ApiProps")]
    public class ApiProps : AlibabaCloud.SDK.ROS.CDK.Apigateway.IApiProps
    {
        /// <summary>Property apiName: The name of the API.Need [4, 50] Chinese\English\Number characters or "_",and should start with Chinese/English character.</summary>
        [JsiiProperty(name: "apiName", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string ApiName
        {
            get;
            set;
        }

        /// <summary>Property groupId: The id of the Group.</summary>
        [JsiiProperty(name: "groupId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string GroupId
        {
            get;
            set;
        }

        /// <summary>Property requestConfig: The configuration of the request.</summary>
        [JsiiProperty(name: "requestConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-apigateway.RosApi.RequestConfigProperty\"}]}}", isOverride: true)]
        public object RequestConfig
        {
            get;
            set;
        }

        /// <summary>Property resultSample: The sample of the result.</summary>
        [JsiiProperty(name: "resultSample", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string ResultSample
        {
            get;
            set;
        }

        /// <summary>Property resultType: The format of service's response, "JSON", "TEXT", "BINARY", "XML", "HTML" or "PASSTHROUGH".</summary>
        /// <remarks>
        /// Default is "JSON".
        /// </remarks>
        [JsiiProperty(name: "resultType", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string ResultType
        {
            get;
            set;
        }

        /// <summary>Property serviceConfig: The configuration of the service.</summary>
        [JsiiProperty(name: "serviceConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-apigateway.RosApi.ServiceConfigProperty\"}]}}", isOverride: true)]
        public object ServiceConfig
        {
            get;
            set;
        }

        /// <summary>Property visibility: Whether to make the API public.</summary>
        /// <remarks>
        /// "PUBLIC" or "PRIVATE".
        /// </remarks>
        [JsiiProperty(name: "visibility", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string Visibility
        {
            get;
            set;
        }

        /// <summary>Property appCodeAuthType: When AuthType is APP authentication, the optional values are as follows: If not passed, the default value is DEFAULT: DEFAULT: Default (set by group).</summary>
        /// <remarks>
        /// DISABLE: Not allowed
        /// HEADER: Allow AppCode header authentication
        /// HEADER_QUERY: Allow AppCode header and query authentication
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "appCodeAuthType", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? AppCodeAuthType
        {
            get;
            set;
        }

        /// <summary>Property authType: Type of authorization of the API .</summary>
        /// <remarks>
        /// "APP","ANONYMOUS", or "APPOPENID"
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "authType", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? AuthType
        {
            get;
            set;
        }

        /// <summary>Property constParameters: The const parameters.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "constParameters", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-apigateway.RosApi.ConstParametersProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true, isOverride: true)]
        public object? ConstParameters
        {
            get;
            set;
        }

        /// <summary>Property description: Description of the API, less than 180 characters.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Description
        {
            get;
            set;
        }

        /// <summary>Property disableInternet: Set DisableInternet to true, only support intranet to call API.</summary>
        /// <remarks>
        /// Set DisableInternet to false, then the call is not restricted.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "disableInternet", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? DisableInternet
        {
            get;
            set;
        }

        /// <summary>Property errorCodeSamples: The Error Code samples.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "errorCodeSamples", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-apigateway.RosApi.ErrorCodeSamplesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true, isOverride: true)]
        public object? ErrorCodeSamples
        {
            get;
            set;
        }

        /// <summary>Property failResultSample: The sample of the fail result.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "failResultSample", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? FailResultSample
        {
            get;
            set;
        }

        /// <summary>Property forceNonceCheck: Set ForceNonceCheck to true, compulsorily check X-Ca-Nonce when requesting,  this is the unique identifier of the request, generally using UUID to identify.</summary>
        /// <remarks>
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

        /// <summary>Property openIdConnectConfig: The configuration of the open id.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "openIdConnectConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-apigateway.RosApi.OpenIdConnectConfigProperty\"}]}}", isOptional: true, isOverride: true)]
        public object? OpenIdConnectConfig
        {
            get;
            set;
        }

        /// <summary>Property requestParameters: The request parameters.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "requestParameters", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-apigateway.RosApi.RequestParametersProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true, isOverride: true)]
        public object? RequestParameters
        {
            get;
            set;
        }

        /// <summary>Property serviceParameters: The service parameters.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "serviceParameters", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-apigateway.RosApi.ServiceParametersProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true, isOverride: true)]
        public object? ServiceParameters
        {
            get;
            set;
        }

        /// <summary>Property serviceParametersMap: The mapping relation between (request parameters\const parameters\system parameters) and service parameters.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "serviceParametersMap", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-apigateway.RosApi.ServiceParametersMapProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true, isOverride: true)]
        public object? ServiceParametersMap
        {
            get;
            set;
        }

        /// <summary>Property systemParameters: The system parameters.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "systemParameters", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-apigateway.RosApi.SystemParametersProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true, isOverride: true)]
        public object? SystemParameters
        {
            get;
            set;
        }

        /// <summary>Property tags: Tags to attach to instance.</summary>
        /// <remarks>
        /// Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}},\"kind\":\"array\"}}", isOptional: true, isOverride: true)]
        public System.Collections.Generic.IDictionary<string, object>[]? Tags
        {
            get;
            set;
        }
    }
}
