using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Edas
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::EDAS::K8sApplication`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-edas.RosK8sApplicationProps")]
    public class RosK8sApplicationProps : AlibabaCloud.SDK.ROS.CDK.Edas.IRosK8sApplicationProps
    {
        /// <remarks>
        /// <strong>Property</strong>: appName: The name of the application. The name must start with a letter and can contain digits,
        /// letters, and hyphens (-). It can be up to 36 characters in length.
        /// </remarks>
        [JsiiProperty(name: "appName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object AppName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: clusterId: The cluster ID. You can query the cluster ID by calling the ListCluster operation.
        /// For more information, see ListCluster.
        /// </remarks>
        [JsiiProperty(name: "clusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object ClusterId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: applicationDescription: The description of the application.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "applicationDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? ApplicationDescription
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: command: The command that is specified. If it is specified, it replaces the startup command in the image when the image is started.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "command", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? Command
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: commandArgs: The collection of commands. For example, [{"argument":"-c"},{"argument":"test"}], where -c and test are two parameters that can be set.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "commandArgs", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-edas.RosK8sApplication.CommandArgsProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true, isOverride: true)]
        public object? CommandArgs
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: deployAcrossNodes: Specifies whether to distribute application instances to multiple nodes. The value true indicates yes, whereas other values indicate no.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "deployAcrossNodes", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? DeployAcrossNodes
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: deployAcrossZones: Specifies whether to distribute application instances to multiple zones. The value true indicates yes, whereas other values indicate no.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "deployAcrossZones", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? DeployAcrossZones
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: edasContainerVersion: The version of EDAS Container on which the deployment package of the application depends.
        /// Note This parameter is not supported when you deploy an application by using images.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "edasContainerVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? EdasContainerVersion
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: enableAhas: Specifies whether to enable access to Application High Availability Service (AHAS).
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "enableAhas", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? EnableAhas
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: envs: The collection of deployment environment variables. For example, [{"Name":"x","Value":"y"},{"Name":"x2","Value":"y2"}].
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "envs", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-edas.RosK8sApplication.EnvsProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true, isOverride: true)]
        public object? Envs
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: imageUrl: The image URL. When PackageType is set to Image, this parameter is required.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "imageUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? ImageUrl
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: internetSlbId: The ID of the Internet-facing SLB instance. If this parameter is not specified, EDAS automatically purchases a new SLB instance for you.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "internetSlbId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? InternetSlbId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: internetSlbPort: The frontend port of the Internet-facing SLB instance. Valid values: 1 to 65535.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "internetSlbPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? InternetSlbPort
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: internetSlbProtocol: The protocol of the Internet-facing SLB instance. Valid values: TCP, HTTP, and HTTPS.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "internetSlbProtocol", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? InternetSlbProtocol
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: internetTargetPort: The backend port of the internal-facing SLB instance, which is also the service port of the application.
        /// Valid values: 1 to 65535.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "internetTargetPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? InternetTargetPort
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: intranetSlbId: The ID of the internal-facing SLB instance. If this parameter is not specified, Enterprise Distributed Application Service (EDAS) automatically purchases a new SLB instance for you.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "intranetSlbId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? IntranetSlbId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: intranetSlbPort: The frontend port of the internal-facing SLB instance. Valid values: 1 to 65535.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "intranetSlbPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? IntranetSlbPort
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: intranetSlbProtocol: The protocol of the internal-facing SLB instance. Valid values: TCP, HTTP, and HTTPS.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "intranetSlbProtocol", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? IntranetSlbProtocol
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: intranetTargetPort: The backend port of the internal-facing Server Load Balancer (SLB) instance, which is also the service port of the application. Valid values: 1 to 65535.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "intranetTargetPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? IntranetTargetPort
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: isMultilingualApp: Specifies whether the application is a multi-language application.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "isMultilingualApp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? IsMultilingualApp
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: javaStartUpConfig: The configuration of Java startup parameters for a Java application. These startup parameters involve the memory, application, garbage collection (GC) policy, tools, service registration and discovery, and custom configurations. Proper parameter settings help reduce the GC overhead, shorten the server response time, and improve the throughput.
        /// The system automatically concatenates all startup values as the configuration of Java startup parameters for the application.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "javaStartUpConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-edas.RosK8sApplication.JavaStartUpConfigProperty\"}]}}", isOptional: true, isOverride: true)]
        public object? JavaStartUpConfig
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: jdk: The version of Java Development Kit (JDK) on which the deployment package of the application depends.
        /// Valid values: Open JDK 7 and Open JDK 8. This parameter is not supported when you deploy an application by using images.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "jdk", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? Jdk
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: limitCpu: The maximum number of CPUs allowed for each application instance when the application
        /// is running. Unit: cores.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "limitCpu", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? LimitCpu
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: limitMem: The maximum amount of memory allowed for each application instance when the application is running. Unit: MB.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "limitMem", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? LimitMem
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: liveness: The liveness check on the container.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "liveness", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-edas.RosK8sApplication.LivenessProperty\"}]}}", isOptional: true, isOverride: true)]
        public object? Liveness
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: localVolume: The configuration for mounting host files to the container where the application is running. For example, the value can be [{"type":"", "nodePath":"/localfiles", "mountPath":"/app/files"}, {"type":"Directory", "nodePath":"/mnt", "mountPath":"/app/storage"}].
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "localVolume", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-edas.RosK8sApplication.LocalVolumeProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true, isOverride: true)]
        public object? LocalVolume
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: logicalRegionId: The ID of the EDAS namespace. This parameter is required for a non-default namespace.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "logicalRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? LogicalRegionId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: mountDescs: The description of the NAS mounting configuration. For example, the value can be [{"NasPath": "/k8s","MountPath": "/mnt"}, {"NasPath": "/files", "MountPath": "/app/files"}].
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "mountDescs", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-edas.RosK8sApplication.MountDescsProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true, isOverride: true)]
        public object? MountDescs
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: namespace: The namespace of the Kubernetes cluster. This parameter determines the Kubernetes namespace where your application is deployed. By default, this parameter is set to default.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "namespace", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? Namespace
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: nasId: The ID of the Network Attached Storage (NAS) file system mounted to the container where the application is running. The NAS file system must be in the same region as the cluster. The NAS file system must have an available mount target, or have a mount
        /// target on the vSwitch in the virtual private cloud (VPC) where the application is located. If this parameter is not specified and the mountDescs field exists, a NAS file system is automatically purchased and mounted to the vSwitch in the VPC by default.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "nasId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? NasId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: packageType: The type of the deployment package. Valid values: FatJar, WAR, and Image.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "packageType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? PackageType
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: packageUrl: The URL of the deployment package. This parameter must be set for the applications
        /// that are deployed by using FatJar or WAR packages.
        /// Note The version of SDK for Java or Python must be 2.44.0 or later.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "packageUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? PackageUrl
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: packageVersion: The version of the deployment package. This parameter is required when the PackageType parameter is set to WAR or FatJar. You must specify a version.
        /// Note The version of SDK for Java or Python must be 2.44.0 or later.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "packageVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? PackageVersion
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: postStart: The post-start script. For example, {"Exec": {"Command": ["ls", "/"]}}.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "postStart", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-edas.RosK8sApplication.PostStartProperty\"}]}}", isOptional: true, isOverride: true)]
        public object? PostStart
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: preStop: The pre-stop script. For example, {"Exec": {"Command": ["ls", "/"]}}.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "preStop", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-edas.RosK8sApplication.PreStopProperty\"}]}}", isOptional: true, isOverride: true)]
        public object? PreStop
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: readiness: The readiness check on the container.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "readiness", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-edas.RosK8sApplication.ReadinessProperty\"}]}}", isOptional: true, isOverride: true)]
        public object? Readiness
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: replicas: The number of instances for the application that you want to create. Default: 1
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "replicas", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? Replicas
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: repoId: The ID of the image repository.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "repoId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? RepoId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: requestsCpu: The maximum number of CPUs allowed for each application instance when the application is created. Unit: cores. The value 0 indicates no limit.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "requestsCpu", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? RequestsCpu
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: requestsMem: The maximum amount of memory allowed for each application instance when the application
        /// is created. Unit: MB. The value 0 indicates no limit.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "requestsMem", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? RequestsMem
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: runtimeClassName: The type of the container runtime. This parameter is applicable only to clusters that use sandboxed containers.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "runtimeClassName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? RuntimeClassName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: slsConfigs: The Logstore configurations.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "slsConfigs", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-edas.RosK8sApplication.SlsConfigsProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true, isOverride: true)]
        public object? SlsConfigs
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: storageType: Only SSD is supported.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "storageType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? StorageType
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: timeout: The timeout interval of the change process. Unit: seconds.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "timeout", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? Timeout
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: uriEncoding: The uniform resource identifier (URI) encoding scheme. Valid values: ISO-8859-1, GBK, GB2312, and UTF-8.
        /// Note If this parameter is not specified in application configuration, the default URI encoding
        /// scheme in the Tomcat container is applied.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "uriEncoding", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? UriEncoding
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: useBodyEncoding: Specifies whether useBodyEncodingForURI is enabled.
        /// Note If this parameter is not specified in application configuration, the default value
        /// false is applied.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "useBodyEncoding", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? UseBodyEncoding
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: webContainer: The version of the Tomcat container on which the deployment package of the application depends. This parameter is applicable to Spring Cloud and Apache Dubbo applications that are deployed by using WAR packages. This parameter is not supported when you deploy an application by using images.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "webContainer", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? WebContainer
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: webContainerConfig: The Tomcat container configuration.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "webContainerConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-edas.RosK8sApplication.WebContainerConfigProperty\"}]}}", isOptional: true, isOverride: true)]
        public object? WebContainerConfig
        {
            get;
            set;
        }
    }
}
