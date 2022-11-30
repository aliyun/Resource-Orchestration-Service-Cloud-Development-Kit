package com.aliyun.ros.cdk.edas;

/**
 * Properties for defining a `ALIYUN::EDAS::K8sApplication`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.71.0 (build f1f58ae)", date = "2022-11-30T05:21:19.296Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.edas.$Module.class, fqn = "@alicloud/ros-cdk-edas.RosK8sApplicationProps")
@software.amazon.jsii.Jsii.Proxy(RosK8sApplicationProps.Jsii$Proxy.class)
public interface RosK8sApplicationProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAppName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getClusterId();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getApplicationDescription() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCommand() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCommandArgs() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDeployAcrossNodes() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDeployAcrossZones() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEdasContainerVersion() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEnableAhas() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEnvs() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getImageUrl() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInternetSlbId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInternetSlbPort() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInternetSlbProtocol() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInternetTargetPort() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIntranetSlbId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIntranetSlbPort() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIntranetSlbProtocol() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIntranetTargetPort() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIsMultilingualApp() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getJavaStartUpConfig() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getJdk() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLimitCpu() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLimitMem() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLiveness() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLocalVolume() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLogicalRegionId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMountDescs() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getNamespace() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getNasId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPackageType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPackageUrl() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPackageVersion() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPostStart() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPreStop() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getReadiness() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getReplicas() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRepoId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRequestsCpu() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRequestsMem() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRuntimeClassName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSlsConfigs() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getStorageType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTimeout() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getUriEncoding() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getUseBodyEncoding() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getWebContainer() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getWebContainerConfig() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosK8sApplicationProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosK8sApplicationProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosK8sApplicationProps> {
        java.lang.Object appName;
        java.lang.Object clusterId;
        java.lang.Object applicationDescription;
        java.lang.Object command;
        java.lang.Object commandArgs;
        java.lang.Object deployAcrossNodes;
        java.lang.Object deployAcrossZones;
        java.lang.Object edasContainerVersion;
        java.lang.Object enableAhas;
        java.lang.Object envs;
        java.lang.Object imageUrl;
        java.lang.Object internetSlbId;
        java.lang.Object internetSlbPort;
        java.lang.Object internetSlbProtocol;
        java.lang.Object internetTargetPort;
        java.lang.Object intranetSlbId;
        java.lang.Object intranetSlbPort;
        java.lang.Object intranetSlbProtocol;
        java.lang.Object intranetTargetPort;
        java.lang.Object isMultilingualApp;
        java.lang.Object javaStartUpConfig;
        java.lang.Object jdk;
        java.lang.Object limitCpu;
        java.lang.Object limitMem;
        java.lang.Object liveness;
        java.lang.Object localVolume;
        java.lang.Object logicalRegionId;
        java.lang.Object mountDescs;
        java.lang.Object namespace;
        java.lang.Object nasId;
        java.lang.Object packageType;
        java.lang.Object packageUrl;
        java.lang.Object packageVersion;
        java.lang.Object postStart;
        java.lang.Object preStop;
        java.lang.Object readiness;
        java.lang.Object replicas;
        java.lang.Object repoId;
        java.lang.Object requestsCpu;
        java.lang.Object requestsMem;
        java.lang.Object runtimeClassName;
        java.lang.Object slsConfigs;
        java.lang.Object storageType;
        java.lang.Object timeout;
        java.lang.Object uriEncoding;
        java.lang.Object useBodyEncoding;
        java.lang.Object webContainer;
        java.lang.Object webContainerConfig;

        /**
         * Sets the value of {@link RosK8sApplicationProps#getAppName}
         * @param appName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder appName(java.lang.String appName) {
            this.appName = appName;
            return this;
        }

        /**
         * Sets the value of {@link RosK8sApplicationProps#getAppName}
         * @param appName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder appName(com.aliyun.ros.cdk.core.IResolvable appName) {
            this.appName = appName;
            return this;
        }

        /**
         * Sets the value of {@link RosK8sApplicationProps#getClusterId}
         * @param clusterId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder clusterId(java.lang.String clusterId) {
            this.clusterId = clusterId;
            return this;
        }

        /**
         * Sets the value of {@link RosK8sApplicationProps#getClusterId}
         * @param clusterId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder clusterId(com.aliyun.ros.cdk.core.IResolvable clusterId) {
            this.clusterId = clusterId;
            return this;
        }

        /**
         * Sets the value of {@link RosK8sApplicationProps#getApplicationDescription}
         * @param applicationDescription the value to be set.
         * @return {@code this}
         */
        public Builder applicationDescription(java.lang.String applicationDescription) {
            this.applicationDescription = applicationDescription;
            return this;
        }

        /**
         * Sets the value of {@link RosK8sApplicationProps#getApplicationDescription}
         * @param applicationDescription the value to be set.
         * @return {@code this}
         */
        public Builder applicationDescription(com.aliyun.ros.cdk.core.IResolvable applicationDescription) {
            this.applicationDescription = applicationDescription;
            return this;
        }

        /**
         * Sets the value of {@link RosK8sApplicationProps#getCommand}
         * @param command the value to be set.
         * @return {@code this}
         */
        public Builder command(java.lang.String command) {
            this.command = command;
            return this;
        }

        /**
         * Sets the value of {@link RosK8sApplicationProps#getCommand}
         * @param command the value to be set.
         * @return {@code this}
         */
        public Builder command(com.aliyun.ros.cdk.core.IResolvable command) {
            this.command = command;
            return this;
        }

        /**
         * Sets the value of {@link RosK8sApplicationProps#getCommandArgs}
         * @param commandArgs the value to be set.
         * @return {@code this}
         */
        public Builder commandArgs(com.aliyun.ros.cdk.core.IResolvable commandArgs) {
            this.commandArgs = commandArgs;
            return this;
        }

        /**
         * Sets the value of {@link RosK8sApplicationProps#getCommandArgs}
         * @param commandArgs the value to be set.
         * @return {@code this}
         */
        public Builder commandArgs(java.util.List<? extends java.lang.Object> commandArgs) {
            this.commandArgs = commandArgs;
            return this;
        }

        /**
         * Sets the value of {@link RosK8sApplicationProps#getDeployAcrossNodes}
         * @param deployAcrossNodes the value to be set.
         * @return {@code this}
         */
        public Builder deployAcrossNodes(java.lang.Boolean deployAcrossNodes) {
            this.deployAcrossNodes = deployAcrossNodes;
            return this;
        }

        /**
         * Sets the value of {@link RosK8sApplicationProps#getDeployAcrossNodes}
         * @param deployAcrossNodes the value to be set.
         * @return {@code this}
         */
        public Builder deployAcrossNodes(com.aliyun.ros.cdk.core.IResolvable deployAcrossNodes) {
            this.deployAcrossNodes = deployAcrossNodes;
            return this;
        }

        /**
         * Sets the value of {@link RosK8sApplicationProps#getDeployAcrossZones}
         * @param deployAcrossZones the value to be set.
         * @return {@code this}
         */
        public Builder deployAcrossZones(java.lang.Boolean deployAcrossZones) {
            this.deployAcrossZones = deployAcrossZones;
            return this;
        }

        /**
         * Sets the value of {@link RosK8sApplicationProps#getDeployAcrossZones}
         * @param deployAcrossZones the value to be set.
         * @return {@code this}
         */
        public Builder deployAcrossZones(com.aliyun.ros.cdk.core.IResolvable deployAcrossZones) {
            this.deployAcrossZones = deployAcrossZones;
            return this;
        }

        /**
         * Sets the value of {@link RosK8sApplicationProps#getEdasContainerVersion}
         * @param edasContainerVersion the value to be set.
         * @return {@code this}
         */
        public Builder edasContainerVersion(java.lang.String edasContainerVersion) {
            this.edasContainerVersion = edasContainerVersion;
            return this;
        }

        /**
         * Sets the value of {@link RosK8sApplicationProps#getEdasContainerVersion}
         * @param edasContainerVersion the value to be set.
         * @return {@code this}
         */
        public Builder edasContainerVersion(com.aliyun.ros.cdk.core.IResolvable edasContainerVersion) {
            this.edasContainerVersion = edasContainerVersion;
            return this;
        }

        /**
         * Sets the value of {@link RosK8sApplicationProps#getEnableAhas}
         * @param enableAhas the value to be set.
         * @return {@code this}
         */
        public Builder enableAhas(java.lang.Boolean enableAhas) {
            this.enableAhas = enableAhas;
            return this;
        }

        /**
         * Sets the value of {@link RosK8sApplicationProps#getEnableAhas}
         * @param enableAhas the value to be set.
         * @return {@code this}
         */
        public Builder enableAhas(com.aliyun.ros.cdk.core.IResolvable enableAhas) {
            this.enableAhas = enableAhas;
            return this;
        }

        /**
         * Sets the value of {@link RosK8sApplicationProps#getEnvs}
         * @param envs the value to be set.
         * @return {@code this}
         */
        public Builder envs(com.aliyun.ros.cdk.core.IResolvable envs) {
            this.envs = envs;
            return this;
        }

        /**
         * Sets the value of {@link RosK8sApplicationProps#getEnvs}
         * @param envs the value to be set.
         * @return {@code this}
         */
        public Builder envs(java.util.List<? extends java.lang.Object> envs) {
            this.envs = envs;
            return this;
        }

        /**
         * Sets the value of {@link RosK8sApplicationProps#getImageUrl}
         * @param imageUrl the value to be set.
         * @return {@code this}
         */
        public Builder imageUrl(java.lang.String imageUrl) {
            this.imageUrl = imageUrl;
            return this;
        }

        /**
         * Sets the value of {@link RosK8sApplicationProps#getImageUrl}
         * @param imageUrl the value to be set.
         * @return {@code this}
         */
        public Builder imageUrl(com.aliyun.ros.cdk.core.IResolvable imageUrl) {
            this.imageUrl = imageUrl;
            return this;
        }

        /**
         * Sets the value of {@link RosK8sApplicationProps#getInternetSlbId}
         * @param internetSlbId the value to be set.
         * @return {@code this}
         */
        public Builder internetSlbId(java.lang.String internetSlbId) {
            this.internetSlbId = internetSlbId;
            return this;
        }

        /**
         * Sets the value of {@link RosK8sApplicationProps#getInternetSlbId}
         * @param internetSlbId the value to be set.
         * @return {@code this}
         */
        public Builder internetSlbId(com.aliyun.ros.cdk.core.IResolvable internetSlbId) {
            this.internetSlbId = internetSlbId;
            return this;
        }

        /**
         * Sets the value of {@link RosK8sApplicationProps#getInternetSlbPort}
         * @param internetSlbPort the value to be set.
         * @return {@code this}
         */
        public Builder internetSlbPort(java.lang.Number internetSlbPort) {
            this.internetSlbPort = internetSlbPort;
            return this;
        }

        /**
         * Sets the value of {@link RosK8sApplicationProps#getInternetSlbPort}
         * @param internetSlbPort the value to be set.
         * @return {@code this}
         */
        public Builder internetSlbPort(com.aliyun.ros.cdk.core.IResolvable internetSlbPort) {
            this.internetSlbPort = internetSlbPort;
            return this;
        }

        /**
         * Sets the value of {@link RosK8sApplicationProps#getInternetSlbProtocol}
         * @param internetSlbProtocol the value to be set.
         * @return {@code this}
         */
        public Builder internetSlbProtocol(java.lang.String internetSlbProtocol) {
            this.internetSlbProtocol = internetSlbProtocol;
            return this;
        }

        /**
         * Sets the value of {@link RosK8sApplicationProps#getInternetSlbProtocol}
         * @param internetSlbProtocol the value to be set.
         * @return {@code this}
         */
        public Builder internetSlbProtocol(com.aliyun.ros.cdk.core.IResolvable internetSlbProtocol) {
            this.internetSlbProtocol = internetSlbProtocol;
            return this;
        }

        /**
         * Sets the value of {@link RosK8sApplicationProps#getInternetTargetPort}
         * @param internetTargetPort the value to be set.
         * @return {@code this}
         */
        public Builder internetTargetPort(java.lang.Number internetTargetPort) {
            this.internetTargetPort = internetTargetPort;
            return this;
        }

        /**
         * Sets the value of {@link RosK8sApplicationProps#getInternetTargetPort}
         * @param internetTargetPort the value to be set.
         * @return {@code this}
         */
        public Builder internetTargetPort(com.aliyun.ros.cdk.core.IResolvable internetTargetPort) {
            this.internetTargetPort = internetTargetPort;
            return this;
        }

        /**
         * Sets the value of {@link RosK8sApplicationProps#getIntranetSlbId}
         * @param intranetSlbId the value to be set.
         * @return {@code this}
         */
        public Builder intranetSlbId(java.lang.String intranetSlbId) {
            this.intranetSlbId = intranetSlbId;
            return this;
        }

        /**
         * Sets the value of {@link RosK8sApplicationProps#getIntranetSlbId}
         * @param intranetSlbId the value to be set.
         * @return {@code this}
         */
        public Builder intranetSlbId(com.aliyun.ros.cdk.core.IResolvable intranetSlbId) {
            this.intranetSlbId = intranetSlbId;
            return this;
        }

        /**
         * Sets the value of {@link RosK8sApplicationProps#getIntranetSlbPort}
         * @param intranetSlbPort the value to be set.
         * @return {@code this}
         */
        public Builder intranetSlbPort(java.lang.Number intranetSlbPort) {
            this.intranetSlbPort = intranetSlbPort;
            return this;
        }

        /**
         * Sets the value of {@link RosK8sApplicationProps#getIntranetSlbPort}
         * @param intranetSlbPort the value to be set.
         * @return {@code this}
         */
        public Builder intranetSlbPort(com.aliyun.ros.cdk.core.IResolvable intranetSlbPort) {
            this.intranetSlbPort = intranetSlbPort;
            return this;
        }

        /**
         * Sets the value of {@link RosK8sApplicationProps#getIntranetSlbProtocol}
         * @param intranetSlbProtocol the value to be set.
         * @return {@code this}
         */
        public Builder intranetSlbProtocol(java.lang.String intranetSlbProtocol) {
            this.intranetSlbProtocol = intranetSlbProtocol;
            return this;
        }

        /**
         * Sets the value of {@link RosK8sApplicationProps#getIntranetSlbProtocol}
         * @param intranetSlbProtocol the value to be set.
         * @return {@code this}
         */
        public Builder intranetSlbProtocol(com.aliyun.ros.cdk.core.IResolvable intranetSlbProtocol) {
            this.intranetSlbProtocol = intranetSlbProtocol;
            return this;
        }

        /**
         * Sets the value of {@link RosK8sApplicationProps#getIntranetTargetPort}
         * @param intranetTargetPort the value to be set.
         * @return {@code this}
         */
        public Builder intranetTargetPort(java.lang.Number intranetTargetPort) {
            this.intranetTargetPort = intranetTargetPort;
            return this;
        }

        /**
         * Sets the value of {@link RosK8sApplicationProps#getIntranetTargetPort}
         * @param intranetTargetPort the value to be set.
         * @return {@code this}
         */
        public Builder intranetTargetPort(com.aliyun.ros.cdk.core.IResolvable intranetTargetPort) {
            this.intranetTargetPort = intranetTargetPort;
            return this;
        }

        /**
         * Sets the value of {@link RosK8sApplicationProps#getIsMultilingualApp}
         * @param isMultilingualApp the value to be set.
         * @return {@code this}
         */
        public Builder isMultilingualApp(java.lang.Boolean isMultilingualApp) {
            this.isMultilingualApp = isMultilingualApp;
            return this;
        }

        /**
         * Sets the value of {@link RosK8sApplicationProps#getIsMultilingualApp}
         * @param isMultilingualApp the value to be set.
         * @return {@code this}
         */
        public Builder isMultilingualApp(com.aliyun.ros.cdk.core.IResolvable isMultilingualApp) {
            this.isMultilingualApp = isMultilingualApp;
            return this;
        }

        /**
         * Sets the value of {@link RosK8sApplicationProps#getJavaStartUpConfig}
         * @param javaStartUpConfig the value to be set.
         * @return {@code this}
         */
        public Builder javaStartUpConfig(com.aliyun.ros.cdk.core.IResolvable javaStartUpConfig) {
            this.javaStartUpConfig = javaStartUpConfig;
            return this;
        }

        /**
         * Sets the value of {@link RosK8sApplicationProps#getJavaStartUpConfig}
         * @param javaStartUpConfig the value to be set.
         * @return {@code this}
         */
        public Builder javaStartUpConfig(com.aliyun.ros.cdk.edas.RosK8sApplication.JavaStartUpConfigProperty javaStartUpConfig) {
            this.javaStartUpConfig = javaStartUpConfig;
            return this;
        }

        /**
         * Sets the value of {@link RosK8sApplicationProps#getJdk}
         * @param jdk the value to be set.
         * @return {@code this}
         */
        public Builder jdk(java.lang.String jdk) {
            this.jdk = jdk;
            return this;
        }

        /**
         * Sets the value of {@link RosK8sApplicationProps#getJdk}
         * @param jdk the value to be set.
         * @return {@code this}
         */
        public Builder jdk(com.aliyun.ros.cdk.core.IResolvable jdk) {
            this.jdk = jdk;
            return this;
        }

        /**
         * Sets the value of {@link RosK8sApplicationProps#getLimitCpu}
         * @param limitCpu the value to be set.
         * @return {@code this}
         */
        public Builder limitCpu(java.lang.Number limitCpu) {
            this.limitCpu = limitCpu;
            return this;
        }

        /**
         * Sets the value of {@link RosK8sApplicationProps#getLimitCpu}
         * @param limitCpu the value to be set.
         * @return {@code this}
         */
        public Builder limitCpu(com.aliyun.ros.cdk.core.IResolvable limitCpu) {
            this.limitCpu = limitCpu;
            return this;
        }

        /**
         * Sets the value of {@link RosK8sApplicationProps#getLimitMem}
         * @param limitMem the value to be set.
         * @return {@code this}
         */
        public Builder limitMem(java.lang.Number limitMem) {
            this.limitMem = limitMem;
            return this;
        }

        /**
         * Sets the value of {@link RosK8sApplicationProps#getLimitMem}
         * @param limitMem the value to be set.
         * @return {@code this}
         */
        public Builder limitMem(com.aliyun.ros.cdk.core.IResolvable limitMem) {
            this.limitMem = limitMem;
            return this;
        }

        /**
         * Sets the value of {@link RosK8sApplicationProps#getLiveness}
         * @param liveness the value to be set.
         * @return {@code this}
         */
        public Builder liveness(com.aliyun.ros.cdk.core.IResolvable liveness) {
            this.liveness = liveness;
            return this;
        }

        /**
         * Sets the value of {@link RosK8sApplicationProps#getLiveness}
         * @param liveness the value to be set.
         * @return {@code this}
         */
        public Builder liveness(com.aliyun.ros.cdk.edas.RosK8sApplication.LivenessProperty liveness) {
            this.liveness = liveness;
            return this;
        }

        /**
         * Sets the value of {@link RosK8sApplicationProps#getLocalVolume}
         * @param localVolume the value to be set.
         * @return {@code this}
         */
        public Builder localVolume(com.aliyun.ros.cdk.core.IResolvable localVolume) {
            this.localVolume = localVolume;
            return this;
        }

        /**
         * Sets the value of {@link RosK8sApplicationProps#getLocalVolume}
         * @param localVolume the value to be set.
         * @return {@code this}
         */
        public Builder localVolume(java.util.List<? extends java.lang.Object> localVolume) {
            this.localVolume = localVolume;
            return this;
        }

        /**
         * Sets the value of {@link RosK8sApplicationProps#getLogicalRegionId}
         * @param logicalRegionId the value to be set.
         * @return {@code this}
         */
        public Builder logicalRegionId(java.lang.String logicalRegionId) {
            this.logicalRegionId = logicalRegionId;
            return this;
        }

        /**
         * Sets the value of {@link RosK8sApplicationProps#getLogicalRegionId}
         * @param logicalRegionId the value to be set.
         * @return {@code this}
         */
        public Builder logicalRegionId(com.aliyun.ros.cdk.core.IResolvable logicalRegionId) {
            this.logicalRegionId = logicalRegionId;
            return this;
        }

        /**
         * Sets the value of {@link RosK8sApplicationProps#getMountDescs}
         * @param mountDescs the value to be set.
         * @return {@code this}
         */
        public Builder mountDescs(com.aliyun.ros.cdk.core.IResolvable mountDescs) {
            this.mountDescs = mountDescs;
            return this;
        }

        /**
         * Sets the value of {@link RosK8sApplicationProps#getMountDescs}
         * @param mountDescs the value to be set.
         * @return {@code this}
         */
        public Builder mountDescs(java.util.List<? extends java.lang.Object> mountDescs) {
            this.mountDescs = mountDescs;
            return this;
        }

        /**
         * Sets the value of {@link RosK8sApplicationProps#getNamespace}
         * @param namespace the value to be set.
         * @return {@code this}
         */
        public Builder namespace(java.lang.String namespace) {
            this.namespace = namespace;
            return this;
        }

        /**
         * Sets the value of {@link RosK8sApplicationProps#getNamespace}
         * @param namespace the value to be set.
         * @return {@code this}
         */
        public Builder namespace(com.aliyun.ros.cdk.core.IResolvable namespace) {
            this.namespace = namespace;
            return this;
        }

        /**
         * Sets the value of {@link RosK8sApplicationProps#getNasId}
         * @param nasId the value to be set.
         * @return {@code this}
         */
        public Builder nasId(java.lang.String nasId) {
            this.nasId = nasId;
            return this;
        }

        /**
         * Sets the value of {@link RosK8sApplicationProps#getNasId}
         * @param nasId the value to be set.
         * @return {@code this}
         */
        public Builder nasId(com.aliyun.ros.cdk.core.IResolvable nasId) {
            this.nasId = nasId;
            return this;
        }

        /**
         * Sets the value of {@link RosK8sApplicationProps#getPackageType}
         * @param packageType the value to be set.
         * @return {@code this}
         */
        public Builder packageType(java.lang.String packageType) {
            this.packageType = packageType;
            return this;
        }

        /**
         * Sets the value of {@link RosK8sApplicationProps#getPackageType}
         * @param packageType the value to be set.
         * @return {@code this}
         */
        public Builder packageType(com.aliyun.ros.cdk.core.IResolvable packageType) {
            this.packageType = packageType;
            return this;
        }

        /**
         * Sets the value of {@link RosK8sApplicationProps#getPackageUrl}
         * @param packageUrl the value to be set.
         * @return {@code this}
         */
        public Builder packageUrl(java.lang.String packageUrl) {
            this.packageUrl = packageUrl;
            return this;
        }

        /**
         * Sets the value of {@link RosK8sApplicationProps#getPackageUrl}
         * @param packageUrl the value to be set.
         * @return {@code this}
         */
        public Builder packageUrl(com.aliyun.ros.cdk.core.IResolvable packageUrl) {
            this.packageUrl = packageUrl;
            return this;
        }

        /**
         * Sets the value of {@link RosK8sApplicationProps#getPackageVersion}
         * @param packageVersion the value to be set.
         * @return {@code this}
         */
        public Builder packageVersion(java.lang.String packageVersion) {
            this.packageVersion = packageVersion;
            return this;
        }

        /**
         * Sets the value of {@link RosK8sApplicationProps#getPackageVersion}
         * @param packageVersion the value to be set.
         * @return {@code this}
         */
        public Builder packageVersion(com.aliyun.ros.cdk.core.IResolvable packageVersion) {
            this.packageVersion = packageVersion;
            return this;
        }

        /**
         * Sets the value of {@link RosK8sApplicationProps#getPostStart}
         * @param postStart the value to be set.
         * @return {@code this}
         */
        public Builder postStart(com.aliyun.ros.cdk.core.IResolvable postStart) {
            this.postStart = postStart;
            return this;
        }

        /**
         * Sets the value of {@link RosK8sApplicationProps#getPostStart}
         * @param postStart the value to be set.
         * @return {@code this}
         */
        public Builder postStart(com.aliyun.ros.cdk.edas.RosK8sApplication.PostStartProperty postStart) {
            this.postStart = postStart;
            return this;
        }

        /**
         * Sets the value of {@link RosK8sApplicationProps#getPreStop}
         * @param preStop the value to be set.
         * @return {@code this}
         */
        public Builder preStop(com.aliyun.ros.cdk.core.IResolvable preStop) {
            this.preStop = preStop;
            return this;
        }

        /**
         * Sets the value of {@link RosK8sApplicationProps#getPreStop}
         * @param preStop the value to be set.
         * @return {@code this}
         */
        public Builder preStop(com.aliyun.ros.cdk.edas.RosK8sApplication.PreStopProperty preStop) {
            this.preStop = preStop;
            return this;
        }

        /**
         * Sets the value of {@link RosK8sApplicationProps#getReadiness}
         * @param readiness the value to be set.
         * @return {@code this}
         */
        public Builder readiness(com.aliyun.ros.cdk.core.IResolvable readiness) {
            this.readiness = readiness;
            return this;
        }

        /**
         * Sets the value of {@link RosK8sApplicationProps#getReadiness}
         * @param readiness the value to be set.
         * @return {@code this}
         */
        public Builder readiness(com.aliyun.ros.cdk.edas.RosK8sApplication.ReadinessProperty readiness) {
            this.readiness = readiness;
            return this;
        }

        /**
         * Sets the value of {@link RosK8sApplicationProps#getReplicas}
         * @param replicas the value to be set.
         * @return {@code this}
         */
        public Builder replicas(java.lang.Number replicas) {
            this.replicas = replicas;
            return this;
        }

        /**
         * Sets the value of {@link RosK8sApplicationProps#getReplicas}
         * @param replicas the value to be set.
         * @return {@code this}
         */
        public Builder replicas(com.aliyun.ros.cdk.core.IResolvable replicas) {
            this.replicas = replicas;
            return this;
        }

        /**
         * Sets the value of {@link RosK8sApplicationProps#getRepoId}
         * @param repoId the value to be set.
         * @return {@code this}
         */
        public Builder repoId(java.lang.String repoId) {
            this.repoId = repoId;
            return this;
        }

        /**
         * Sets the value of {@link RosK8sApplicationProps#getRepoId}
         * @param repoId the value to be set.
         * @return {@code this}
         */
        public Builder repoId(com.aliyun.ros.cdk.core.IResolvable repoId) {
            this.repoId = repoId;
            return this;
        }

        /**
         * Sets the value of {@link RosK8sApplicationProps#getRequestsCpu}
         * @param requestsCpu the value to be set.
         * @return {@code this}
         */
        public Builder requestsCpu(java.lang.Number requestsCpu) {
            this.requestsCpu = requestsCpu;
            return this;
        }

        /**
         * Sets the value of {@link RosK8sApplicationProps#getRequestsCpu}
         * @param requestsCpu the value to be set.
         * @return {@code this}
         */
        public Builder requestsCpu(com.aliyun.ros.cdk.core.IResolvable requestsCpu) {
            this.requestsCpu = requestsCpu;
            return this;
        }

        /**
         * Sets the value of {@link RosK8sApplicationProps#getRequestsMem}
         * @param requestsMem the value to be set.
         * @return {@code this}
         */
        public Builder requestsMem(java.lang.Number requestsMem) {
            this.requestsMem = requestsMem;
            return this;
        }

        /**
         * Sets the value of {@link RosK8sApplicationProps#getRequestsMem}
         * @param requestsMem the value to be set.
         * @return {@code this}
         */
        public Builder requestsMem(com.aliyun.ros.cdk.core.IResolvable requestsMem) {
            this.requestsMem = requestsMem;
            return this;
        }

        /**
         * Sets the value of {@link RosK8sApplicationProps#getRuntimeClassName}
         * @param runtimeClassName the value to be set.
         * @return {@code this}
         */
        public Builder runtimeClassName(java.lang.String runtimeClassName) {
            this.runtimeClassName = runtimeClassName;
            return this;
        }

        /**
         * Sets the value of {@link RosK8sApplicationProps#getRuntimeClassName}
         * @param runtimeClassName the value to be set.
         * @return {@code this}
         */
        public Builder runtimeClassName(com.aliyun.ros.cdk.core.IResolvable runtimeClassName) {
            this.runtimeClassName = runtimeClassName;
            return this;
        }

        /**
         * Sets the value of {@link RosK8sApplicationProps#getSlsConfigs}
         * @param slsConfigs the value to be set.
         * @return {@code this}
         */
        public Builder slsConfigs(com.aliyun.ros.cdk.core.IResolvable slsConfigs) {
            this.slsConfigs = slsConfigs;
            return this;
        }

        /**
         * Sets the value of {@link RosK8sApplicationProps#getSlsConfigs}
         * @param slsConfigs the value to be set.
         * @return {@code this}
         */
        public Builder slsConfigs(java.util.List<? extends java.lang.Object> slsConfigs) {
            this.slsConfigs = slsConfigs;
            return this;
        }

        /**
         * Sets the value of {@link RosK8sApplicationProps#getStorageType}
         * @param storageType the value to be set.
         * @return {@code this}
         */
        public Builder storageType(java.lang.String storageType) {
            this.storageType = storageType;
            return this;
        }

        /**
         * Sets the value of {@link RosK8sApplicationProps#getStorageType}
         * @param storageType the value to be set.
         * @return {@code this}
         */
        public Builder storageType(com.aliyun.ros.cdk.core.IResolvable storageType) {
            this.storageType = storageType;
            return this;
        }

        /**
         * Sets the value of {@link RosK8sApplicationProps#getTimeout}
         * @param timeout the value to be set.
         * @return {@code this}
         */
        public Builder timeout(java.lang.Number timeout) {
            this.timeout = timeout;
            return this;
        }

        /**
         * Sets the value of {@link RosK8sApplicationProps#getTimeout}
         * @param timeout the value to be set.
         * @return {@code this}
         */
        public Builder timeout(com.aliyun.ros.cdk.core.IResolvable timeout) {
            this.timeout = timeout;
            return this;
        }

        /**
         * Sets the value of {@link RosK8sApplicationProps#getUriEncoding}
         * @param uriEncoding the value to be set.
         * @return {@code this}
         */
        public Builder uriEncoding(java.lang.String uriEncoding) {
            this.uriEncoding = uriEncoding;
            return this;
        }

        /**
         * Sets the value of {@link RosK8sApplicationProps#getUriEncoding}
         * @param uriEncoding the value to be set.
         * @return {@code this}
         */
        public Builder uriEncoding(com.aliyun.ros.cdk.core.IResolvable uriEncoding) {
            this.uriEncoding = uriEncoding;
            return this;
        }

        /**
         * Sets the value of {@link RosK8sApplicationProps#getUseBodyEncoding}
         * @param useBodyEncoding the value to be set.
         * @return {@code this}
         */
        public Builder useBodyEncoding(java.lang.Boolean useBodyEncoding) {
            this.useBodyEncoding = useBodyEncoding;
            return this;
        }

        /**
         * Sets the value of {@link RosK8sApplicationProps#getUseBodyEncoding}
         * @param useBodyEncoding the value to be set.
         * @return {@code this}
         */
        public Builder useBodyEncoding(com.aliyun.ros.cdk.core.IResolvable useBodyEncoding) {
            this.useBodyEncoding = useBodyEncoding;
            return this;
        }

        /**
         * Sets the value of {@link RosK8sApplicationProps#getWebContainer}
         * @param webContainer the value to be set.
         * @return {@code this}
         */
        public Builder webContainer(java.lang.String webContainer) {
            this.webContainer = webContainer;
            return this;
        }

        /**
         * Sets the value of {@link RosK8sApplicationProps#getWebContainer}
         * @param webContainer the value to be set.
         * @return {@code this}
         */
        public Builder webContainer(com.aliyun.ros.cdk.core.IResolvable webContainer) {
            this.webContainer = webContainer;
            return this;
        }

        /**
         * Sets the value of {@link RosK8sApplicationProps#getWebContainerConfig}
         * @param webContainerConfig the value to be set.
         * @return {@code this}
         */
        public Builder webContainerConfig(com.aliyun.ros.cdk.core.IResolvable webContainerConfig) {
            this.webContainerConfig = webContainerConfig;
            return this;
        }

        /**
         * Sets the value of {@link RosK8sApplicationProps#getWebContainerConfig}
         * @param webContainerConfig the value to be set.
         * @return {@code this}
         */
        public Builder webContainerConfig(com.aliyun.ros.cdk.edas.RosK8sApplication.WebContainerConfigProperty webContainerConfig) {
            this.webContainerConfig = webContainerConfig;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosK8sApplicationProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosK8sApplicationProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosK8sApplicationProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosK8sApplicationProps {
        private final java.lang.Object appName;
        private final java.lang.Object clusterId;
        private final java.lang.Object applicationDescription;
        private final java.lang.Object command;
        private final java.lang.Object commandArgs;
        private final java.lang.Object deployAcrossNodes;
        private final java.lang.Object deployAcrossZones;
        private final java.lang.Object edasContainerVersion;
        private final java.lang.Object enableAhas;
        private final java.lang.Object envs;
        private final java.lang.Object imageUrl;
        private final java.lang.Object internetSlbId;
        private final java.lang.Object internetSlbPort;
        private final java.lang.Object internetSlbProtocol;
        private final java.lang.Object internetTargetPort;
        private final java.lang.Object intranetSlbId;
        private final java.lang.Object intranetSlbPort;
        private final java.lang.Object intranetSlbProtocol;
        private final java.lang.Object intranetTargetPort;
        private final java.lang.Object isMultilingualApp;
        private final java.lang.Object javaStartUpConfig;
        private final java.lang.Object jdk;
        private final java.lang.Object limitCpu;
        private final java.lang.Object limitMem;
        private final java.lang.Object liveness;
        private final java.lang.Object localVolume;
        private final java.lang.Object logicalRegionId;
        private final java.lang.Object mountDescs;
        private final java.lang.Object namespace;
        private final java.lang.Object nasId;
        private final java.lang.Object packageType;
        private final java.lang.Object packageUrl;
        private final java.lang.Object packageVersion;
        private final java.lang.Object postStart;
        private final java.lang.Object preStop;
        private final java.lang.Object readiness;
        private final java.lang.Object replicas;
        private final java.lang.Object repoId;
        private final java.lang.Object requestsCpu;
        private final java.lang.Object requestsMem;
        private final java.lang.Object runtimeClassName;
        private final java.lang.Object slsConfigs;
        private final java.lang.Object storageType;
        private final java.lang.Object timeout;
        private final java.lang.Object uriEncoding;
        private final java.lang.Object useBodyEncoding;
        private final java.lang.Object webContainer;
        private final java.lang.Object webContainerConfig;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.appName = software.amazon.jsii.Kernel.get(this, "appName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.clusterId = software.amazon.jsii.Kernel.get(this, "clusterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.applicationDescription = software.amazon.jsii.Kernel.get(this, "applicationDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.command = software.amazon.jsii.Kernel.get(this, "command", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.commandArgs = software.amazon.jsii.Kernel.get(this, "commandArgs", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.deployAcrossNodes = software.amazon.jsii.Kernel.get(this, "deployAcrossNodes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.deployAcrossZones = software.amazon.jsii.Kernel.get(this, "deployAcrossZones", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.edasContainerVersion = software.amazon.jsii.Kernel.get(this, "edasContainerVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.enableAhas = software.amazon.jsii.Kernel.get(this, "enableAhas", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.envs = software.amazon.jsii.Kernel.get(this, "envs", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.imageUrl = software.amazon.jsii.Kernel.get(this, "imageUrl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.internetSlbId = software.amazon.jsii.Kernel.get(this, "internetSlbId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.internetSlbPort = software.amazon.jsii.Kernel.get(this, "internetSlbPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.internetSlbProtocol = software.amazon.jsii.Kernel.get(this, "internetSlbProtocol", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.internetTargetPort = software.amazon.jsii.Kernel.get(this, "internetTargetPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.intranetSlbId = software.amazon.jsii.Kernel.get(this, "intranetSlbId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.intranetSlbPort = software.amazon.jsii.Kernel.get(this, "intranetSlbPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.intranetSlbProtocol = software.amazon.jsii.Kernel.get(this, "intranetSlbProtocol", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.intranetTargetPort = software.amazon.jsii.Kernel.get(this, "intranetTargetPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.isMultilingualApp = software.amazon.jsii.Kernel.get(this, "isMultilingualApp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.javaStartUpConfig = software.amazon.jsii.Kernel.get(this, "javaStartUpConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.jdk = software.amazon.jsii.Kernel.get(this, "jdk", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.limitCpu = software.amazon.jsii.Kernel.get(this, "limitCpu", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.limitMem = software.amazon.jsii.Kernel.get(this, "limitMem", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.liveness = software.amazon.jsii.Kernel.get(this, "liveness", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.localVolume = software.amazon.jsii.Kernel.get(this, "localVolume", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.logicalRegionId = software.amazon.jsii.Kernel.get(this, "logicalRegionId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.mountDescs = software.amazon.jsii.Kernel.get(this, "mountDescs", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.namespace = software.amazon.jsii.Kernel.get(this, "namespace", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.nasId = software.amazon.jsii.Kernel.get(this, "nasId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.packageType = software.amazon.jsii.Kernel.get(this, "packageType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.packageUrl = software.amazon.jsii.Kernel.get(this, "packageUrl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.packageVersion = software.amazon.jsii.Kernel.get(this, "packageVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.postStart = software.amazon.jsii.Kernel.get(this, "postStart", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.preStop = software.amazon.jsii.Kernel.get(this, "preStop", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.readiness = software.amazon.jsii.Kernel.get(this, "readiness", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.replicas = software.amazon.jsii.Kernel.get(this, "replicas", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.repoId = software.amazon.jsii.Kernel.get(this, "repoId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.requestsCpu = software.amazon.jsii.Kernel.get(this, "requestsCpu", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.requestsMem = software.amazon.jsii.Kernel.get(this, "requestsMem", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.runtimeClassName = software.amazon.jsii.Kernel.get(this, "runtimeClassName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.slsConfigs = software.amazon.jsii.Kernel.get(this, "slsConfigs", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.storageType = software.amazon.jsii.Kernel.get(this, "storageType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.timeout = software.amazon.jsii.Kernel.get(this, "timeout", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.uriEncoding = software.amazon.jsii.Kernel.get(this, "uriEncoding", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.useBodyEncoding = software.amazon.jsii.Kernel.get(this, "useBodyEncoding", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.webContainer = software.amazon.jsii.Kernel.get(this, "webContainer", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.webContainerConfig = software.amazon.jsii.Kernel.get(this, "webContainerConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.appName = java.util.Objects.requireNonNull(builder.appName, "appName is required");
            this.clusterId = java.util.Objects.requireNonNull(builder.clusterId, "clusterId is required");
            this.applicationDescription = builder.applicationDescription;
            this.command = builder.command;
            this.commandArgs = builder.commandArgs;
            this.deployAcrossNodes = builder.deployAcrossNodes;
            this.deployAcrossZones = builder.deployAcrossZones;
            this.edasContainerVersion = builder.edasContainerVersion;
            this.enableAhas = builder.enableAhas;
            this.envs = builder.envs;
            this.imageUrl = builder.imageUrl;
            this.internetSlbId = builder.internetSlbId;
            this.internetSlbPort = builder.internetSlbPort;
            this.internetSlbProtocol = builder.internetSlbProtocol;
            this.internetTargetPort = builder.internetTargetPort;
            this.intranetSlbId = builder.intranetSlbId;
            this.intranetSlbPort = builder.intranetSlbPort;
            this.intranetSlbProtocol = builder.intranetSlbProtocol;
            this.intranetTargetPort = builder.intranetTargetPort;
            this.isMultilingualApp = builder.isMultilingualApp;
            this.javaStartUpConfig = builder.javaStartUpConfig;
            this.jdk = builder.jdk;
            this.limitCpu = builder.limitCpu;
            this.limitMem = builder.limitMem;
            this.liveness = builder.liveness;
            this.localVolume = builder.localVolume;
            this.logicalRegionId = builder.logicalRegionId;
            this.mountDescs = builder.mountDescs;
            this.namespace = builder.namespace;
            this.nasId = builder.nasId;
            this.packageType = builder.packageType;
            this.packageUrl = builder.packageUrl;
            this.packageVersion = builder.packageVersion;
            this.postStart = builder.postStart;
            this.preStop = builder.preStop;
            this.readiness = builder.readiness;
            this.replicas = builder.replicas;
            this.repoId = builder.repoId;
            this.requestsCpu = builder.requestsCpu;
            this.requestsMem = builder.requestsMem;
            this.runtimeClassName = builder.runtimeClassName;
            this.slsConfigs = builder.slsConfigs;
            this.storageType = builder.storageType;
            this.timeout = builder.timeout;
            this.uriEncoding = builder.uriEncoding;
            this.useBodyEncoding = builder.useBodyEncoding;
            this.webContainer = builder.webContainer;
            this.webContainerConfig = builder.webContainerConfig;
        }

        @Override
        public final java.lang.Object getAppName() {
            return this.appName;
        }

        @Override
        public final java.lang.Object getClusterId() {
            return this.clusterId;
        }

        @Override
        public final java.lang.Object getApplicationDescription() {
            return this.applicationDescription;
        }

        @Override
        public final java.lang.Object getCommand() {
            return this.command;
        }

        @Override
        public final java.lang.Object getCommandArgs() {
            return this.commandArgs;
        }

        @Override
        public final java.lang.Object getDeployAcrossNodes() {
            return this.deployAcrossNodes;
        }

        @Override
        public final java.lang.Object getDeployAcrossZones() {
            return this.deployAcrossZones;
        }

        @Override
        public final java.lang.Object getEdasContainerVersion() {
            return this.edasContainerVersion;
        }

        @Override
        public final java.lang.Object getEnableAhas() {
            return this.enableAhas;
        }

        @Override
        public final java.lang.Object getEnvs() {
            return this.envs;
        }

        @Override
        public final java.lang.Object getImageUrl() {
            return this.imageUrl;
        }

        @Override
        public final java.lang.Object getInternetSlbId() {
            return this.internetSlbId;
        }

        @Override
        public final java.lang.Object getInternetSlbPort() {
            return this.internetSlbPort;
        }

        @Override
        public final java.lang.Object getInternetSlbProtocol() {
            return this.internetSlbProtocol;
        }

        @Override
        public final java.lang.Object getInternetTargetPort() {
            return this.internetTargetPort;
        }

        @Override
        public final java.lang.Object getIntranetSlbId() {
            return this.intranetSlbId;
        }

        @Override
        public final java.lang.Object getIntranetSlbPort() {
            return this.intranetSlbPort;
        }

        @Override
        public final java.lang.Object getIntranetSlbProtocol() {
            return this.intranetSlbProtocol;
        }

        @Override
        public final java.lang.Object getIntranetTargetPort() {
            return this.intranetTargetPort;
        }

        @Override
        public final java.lang.Object getIsMultilingualApp() {
            return this.isMultilingualApp;
        }

        @Override
        public final java.lang.Object getJavaStartUpConfig() {
            return this.javaStartUpConfig;
        }

        @Override
        public final java.lang.Object getJdk() {
            return this.jdk;
        }

        @Override
        public final java.lang.Object getLimitCpu() {
            return this.limitCpu;
        }

        @Override
        public final java.lang.Object getLimitMem() {
            return this.limitMem;
        }

        @Override
        public final java.lang.Object getLiveness() {
            return this.liveness;
        }

        @Override
        public final java.lang.Object getLocalVolume() {
            return this.localVolume;
        }

        @Override
        public final java.lang.Object getLogicalRegionId() {
            return this.logicalRegionId;
        }

        @Override
        public final java.lang.Object getMountDescs() {
            return this.mountDescs;
        }

        @Override
        public final java.lang.Object getNamespace() {
            return this.namespace;
        }

        @Override
        public final java.lang.Object getNasId() {
            return this.nasId;
        }

        @Override
        public final java.lang.Object getPackageType() {
            return this.packageType;
        }

        @Override
        public final java.lang.Object getPackageUrl() {
            return this.packageUrl;
        }

        @Override
        public final java.lang.Object getPackageVersion() {
            return this.packageVersion;
        }

        @Override
        public final java.lang.Object getPostStart() {
            return this.postStart;
        }

        @Override
        public final java.lang.Object getPreStop() {
            return this.preStop;
        }

        @Override
        public final java.lang.Object getReadiness() {
            return this.readiness;
        }

        @Override
        public final java.lang.Object getReplicas() {
            return this.replicas;
        }

        @Override
        public final java.lang.Object getRepoId() {
            return this.repoId;
        }

        @Override
        public final java.lang.Object getRequestsCpu() {
            return this.requestsCpu;
        }

        @Override
        public final java.lang.Object getRequestsMem() {
            return this.requestsMem;
        }

        @Override
        public final java.lang.Object getRuntimeClassName() {
            return this.runtimeClassName;
        }

        @Override
        public final java.lang.Object getSlsConfigs() {
            return this.slsConfigs;
        }

        @Override
        public final java.lang.Object getStorageType() {
            return this.storageType;
        }

        @Override
        public final java.lang.Object getTimeout() {
            return this.timeout;
        }

        @Override
        public final java.lang.Object getUriEncoding() {
            return this.uriEncoding;
        }

        @Override
        public final java.lang.Object getUseBodyEncoding() {
            return this.useBodyEncoding;
        }

        @Override
        public final java.lang.Object getWebContainer() {
            return this.webContainer;
        }

        @Override
        public final java.lang.Object getWebContainerConfig() {
            return this.webContainerConfig;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("appName", om.valueToTree(this.getAppName()));
            data.set("clusterId", om.valueToTree(this.getClusterId()));
            if (this.getApplicationDescription() != null) {
                data.set("applicationDescription", om.valueToTree(this.getApplicationDescription()));
            }
            if (this.getCommand() != null) {
                data.set("command", om.valueToTree(this.getCommand()));
            }
            if (this.getCommandArgs() != null) {
                data.set("commandArgs", om.valueToTree(this.getCommandArgs()));
            }
            if (this.getDeployAcrossNodes() != null) {
                data.set("deployAcrossNodes", om.valueToTree(this.getDeployAcrossNodes()));
            }
            if (this.getDeployAcrossZones() != null) {
                data.set("deployAcrossZones", om.valueToTree(this.getDeployAcrossZones()));
            }
            if (this.getEdasContainerVersion() != null) {
                data.set("edasContainerVersion", om.valueToTree(this.getEdasContainerVersion()));
            }
            if (this.getEnableAhas() != null) {
                data.set("enableAhas", om.valueToTree(this.getEnableAhas()));
            }
            if (this.getEnvs() != null) {
                data.set("envs", om.valueToTree(this.getEnvs()));
            }
            if (this.getImageUrl() != null) {
                data.set("imageUrl", om.valueToTree(this.getImageUrl()));
            }
            if (this.getInternetSlbId() != null) {
                data.set("internetSlbId", om.valueToTree(this.getInternetSlbId()));
            }
            if (this.getInternetSlbPort() != null) {
                data.set("internetSlbPort", om.valueToTree(this.getInternetSlbPort()));
            }
            if (this.getInternetSlbProtocol() != null) {
                data.set("internetSlbProtocol", om.valueToTree(this.getInternetSlbProtocol()));
            }
            if (this.getInternetTargetPort() != null) {
                data.set("internetTargetPort", om.valueToTree(this.getInternetTargetPort()));
            }
            if (this.getIntranetSlbId() != null) {
                data.set("intranetSlbId", om.valueToTree(this.getIntranetSlbId()));
            }
            if (this.getIntranetSlbPort() != null) {
                data.set("intranetSlbPort", om.valueToTree(this.getIntranetSlbPort()));
            }
            if (this.getIntranetSlbProtocol() != null) {
                data.set("intranetSlbProtocol", om.valueToTree(this.getIntranetSlbProtocol()));
            }
            if (this.getIntranetTargetPort() != null) {
                data.set("intranetTargetPort", om.valueToTree(this.getIntranetTargetPort()));
            }
            if (this.getIsMultilingualApp() != null) {
                data.set("isMultilingualApp", om.valueToTree(this.getIsMultilingualApp()));
            }
            if (this.getJavaStartUpConfig() != null) {
                data.set("javaStartUpConfig", om.valueToTree(this.getJavaStartUpConfig()));
            }
            if (this.getJdk() != null) {
                data.set("jdk", om.valueToTree(this.getJdk()));
            }
            if (this.getLimitCpu() != null) {
                data.set("limitCpu", om.valueToTree(this.getLimitCpu()));
            }
            if (this.getLimitMem() != null) {
                data.set("limitMem", om.valueToTree(this.getLimitMem()));
            }
            if (this.getLiveness() != null) {
                data.set("liveness", om.valueToTree(this.getLiveness()));
            }
            if (this.getLocalVolume() != null) {
                data.set("localVolume", om.valueToTree(this.getLocalVolume()));
            }
            if (this.getLogicalRegionId() != null) {
                data.set("logicalRegionId", om.valueToTree(this.getLogicalRegionId()));
            }
            if (this.getMountDescs() != null) {
                data.set("mountDescs", om.valueToTree(this.getMountDescs()));
            }
            if (this.getNamespace() != null) {
                data.set("namespace", om.valueToTree(this.getNamespace()));
            }
            if (this.getNasId() != null) {
                data.set("nasId", om.valueToTree(this.getNasId()));
            }
            if (this.getPackageType() != null) {
                data.set("packageType", om.valueToTree(this.getPackageType()));
            }
            if (this.getPackageUrl() != null) {
                data.set("packageUrl", om.valueToTree(this.getPackageUrl()));
            }
            if (this.getPackageVersion() != null) {
                data.set("packageVersion", om.valueToTree(this.getPackageVersion()));
            }
            if (this.getPostStart() != null) {
                data.set("postStart", om.valueToTree(this.getPostStart()));
            }
            if (this.getPreStop() != null) {
                data.set("preStop", om.valueToTree(this.getPreStop()));
            }
            if (this.getReadiness() != null) {
                data.set("readiness", om.valueToTree(this.getReadiness()));
            }
            if (this.getReplicas() != null) {
                data.set("replicas", om.valueToTree(this.getReplicas()));
            }
            if (this.getRepoId() != null) {
                data.set("repoId", om.valueToTree(this.getRepoId()));
            }
            if (this.getRequestsCpu() != null) {
                data.set("requestsCpu", om.valueToTree(this.getRequestsCpu()));
            }
            if (this.getRequestsMem() != null) {
                data.set("requestsMem", om.valueToTree(this.getRequestsMem()));
            }
            if (this.getRuntimeClassName() != null) {
                data.set("runtimeClassName", om.valueToTree(this.getRuntimeClassName()));
            }
            if (this.getSlsConfigs() != null) {
                data.set("slsConfigs", om.valueToTree(this.getSlsConfigs()));
            }
            if (this.getStorageType() != null) {
                data.set("storageType", om.valueToTree(this.getStorageType()));
            }
            if (this.getTimeout() != null) {
                data.set("timeout", om.valueToTree(this.getTimeout()));
            }
            if (this.getUriEncoding() != null) {
                data.set("uriEncoding", om.valueToTree(this.getUriEncoding()));
            }
            if (this.getUseBodyEncoding() != null) {
                data.set("useBodyEncoding", om.valueToTree(this.getUseBodyEncoding()));
            }
            if (this.getWebContainer() != null) {
                data.set("webContainer", om.valueToTree(this.getWebContainer()));
            }
            if (this.getWebContainerConfig() != null) {
                data.set("webContainerConfig", om.valueToTree(this.getWebContainerConfig()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-edas.RosK8sApplicationProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosK8sApplicationProps.Jsii$Proxy that = (RosK8sApplicationProps.Jsii$Proxy) o;

            if (!appName.equals(that.appName)) return false;
            if (!clusterId.equals(that.clusterId)) return false;
            if (this.applicationDescription != null ? !this.applicationDescription.equals(that.applicationDescription) : that.applicationDescription != null) return false;
            if (this.command != null ? !this.command.equals(that.command) : that.command != null) return false;
            if (this.commandArgs != null ? !this.commandArgs.equals(that.commandArgs) : that.commandArgs != null) return false;
            if (this.deployAcrossNodes != null ? !this.deployAcrossNodes.equals(that.deployAcrossNodes) : that.deployAcrossNodes != null) return false;
            if (this.deployAcrossZones != null ? !this.deployAcrossZones.equals(that.deployAcrossZones) : that.deployAcrossZones != null) return false;
            if (this.edasContainerVersion != null ? !this.edasContainerVersion.equals(that.edasContainerVersion) : that.edasContainerVersion != null) return false;
            if (this.enableAhas != null ? !this.enableAhas.equals(that.enableAhas) : that.enableAhas != null) return false;
            if (this.envs != null ? !this.envs.equals(that.envs) : that.envs != null) return false;
            if (this.imageUrl != null ? !this.imageUrl.equals(that.imageUrl) : that.imageUrl != null) return false;
            if (this.internetSlbId != null ? !this.internetSlbId.equals(that.internetSlbId) : that.internetSlbId != null) return false;
            if (this.internetSlbPort != null ? !this.internetSlbPort.equals(that.internetSlbPort) : that.internetSlbPort != null) return false;
            if (this.internetSlbProtocol != null ? !this.internetSlbProtocol.equals(that.internetSlbProtocol) : that.internetSlbProtocol != null) return false;
            if (this.internetTargetPort != null ? !this.internetTargetPort.equals(that.internetTargetPort) : that.internetTargetPort != null) return false;
            if (this.intranetSlbId != null ? !this.intranetSlbId.equals(that.intranetSlbId) : that.intranetSlbId != null) return false;
            if (this.intranetSlbPort != null ? !this.intranetSlbPort.equals(that.intranetSlbPort) : that.intranetSlbPort != null) return false;
            if (this.intranetSlbProtocol != null ? !this.intranetSlbProtocol.equals(that.intranetSlbProtocol) : that.intranetSlbProtocol != null) return false;
            if (this.intranetTargetPort != null ? !this.intranetTargetPort.equals(that.intranetTargetPort) : that.intranetTargetPort != null) return false;
            if (this.isMultilingualApp != null ? !this.isMultilingualApp.equals(that.isMultilingualApp) : that.isMultilingualApp != null) return false;
            if (this.javaStartUpConfig != null ? !this.javaStartUpConfig.equals(that.javaStartUpConfig) : that.javaStartUpConfig != null) return false;
            if (this.jdk != null ? !this.jdk.equals(that.jdk) : that.jdk != null) return false;
            if (this.limitCpu != null ? !this.limitCpu.equals(that.limitCpu) : that.limitCpu != null) return false;
            if (this.limitMem != null ? !this.limitMem.equals(that.limitMem) : that.limitMem != null) return false;
            if (this.liveness != null ? !this.liveness.equals(that.liveness) : that.liveness != null) return false;
            if (this.localVolume != null ? !this.localVolume.equals(that.localVolume) : that.localVolume != null) return false;
            if (this.logicalRegionId != null ? !this.logicalRegionId.equals(that.logicalRegionId) : that.logicalRegionId != null) return false;
            if (this.mountDescs != null ? !this.mountDescs.equals(that.mountDescs) : that.mountDescs != null) return false;
            if (this.namespace != null ? !this.namespace.equals(that.namespace) : that.namespace != null) return false;
            if (this.nasId != null ? !this.nasId.equals(that.nasId) : that.nasId != null) return false;
            if (this.packageType != null ? !this.packageType.equals(that.packageType) : that.packageType != null) return false;
            if (this.packageUrl != null ? !this.packageUrl.equals(that.packageUrl) : that.packageUrl != null) return false;
            if (this.packageVersion != null ? !this.packageVersion.equals(that.packageVersion) : that.packageVersion != null) return false;
            if (this.postStart != null ? !this.postStart.equals(that.postStart) : that.postStart != null) return false;
            if (this.preStop != null ? !this.preStop.equals(that.preStop) : that.preStop != null) return false;
            if (this.readiness != null ? !this.readiness.equals(that.readiness) : that.readiness != null) return false;
            if (this.replicas != null ? !this.replicas.equals(that.replicas) : that.replicas != null) return false;
            if (this.repoId != null ? !this.repoId.equals(that.repoId) : that.repoId != null) return false;
            if (this.requestsCpu != null ? !this.requestsCpu.equals(that.requestsCpu) : that.requestsCpu != null) return false;
            if (this.requestsMem != null ? !this.requestsMem.equals(that.requestsMem) : that.requestsMem != null) return false;
            if (this.runtimeClassName != null ? !this.runtimeClassName.equals(that.runtimeClassName) : that.runtimeClassName != null) return false;
            if (this.slsConfigs != null ? !this.slsConfigs.equals(that.slsConfigs) : that.slsConfigs != null) return false;
            if (this.storageType != null ? !this.storageType.equals(that.storageType) : that.storageType != null) return false;
            if (this.timeout != null ? !this.timeout.equals(that.timeout) : that.timeout != null) return false;
            if (this.uriEncoding != null ? !this.uriEncoding.equals(that.uriEncoding) : that.uriEncoding != null) return false;
            if (this.useBodyEncoding != null ? !this.useBodyEncoding.equals(that.useBodyEncoding) : that.useBodyEncoding != null) return false;
            if (this.webContainer != null ? !this.webContainer.equals(that.webContainer) : that.webContainer != null) return false;
            return this.webContainerConfig != null ? this.webContainerConfig.equals(that.webContainerConfig) : that.webContainerConfig == null;
        }

        @Override
        public final int hashCode() {
            int result = this.appName.hashCode();
            result = 31 * result + (this.clusterId.hashCode());
            result = 31 * result + (this.applicationDescription != null ? this.applicationDescription.hashCode() : 0);
            result = 31 * result + (this.command != null ? this.command.hashCode() : 0);
            result = 31 * result + (this.commandArgs != null ? this.commandArgs.hashCode() : 0);
            result = 31 * result + (this.deployAcrossNodes != null ? this.deployAcrossNodes.hashCode() : 0);
            result = 31 * result + (this.deployAcrossZones != null ? this.deployAcrossZones.hashCode() : 0);
            result = 31 * result + (this.edasContainerVersion != null ? this.edasContainerVersion.hashCode() : 0);
            result = 31 * result + (this.enableAhas != null ? this.enableAhas.hashCode() : 0);
            result = 31 * result + (this.envs != null ? this.envs.hashCode() : 0);
            result = 31 * result + (this.imageUrl != null ? this.imageUrl.hashCode() : 0);
            result = 31 * result + (this.internetSlbId != null ? this.internetSlbId.hashCode() : 0);
            result = 31 * result + (this.internetSlbPort != null ? this.internetSlbPort.hashCode() : 0);
            result = 31 * result + (this.internetSlbProtocol != null ? this.internetSlbProtocol.hashCode() : 0);
            result = 31 * result + (this.internetTargetPort != null ? this.internetTargetPort.hashCode() : 0);
            result = 31 * result + (this.intranetSlbId != null ? this.intranetSlbId.hashCode() : 0);
            result = 31 * result + (this.intranetSlbPort != null ? this.intranetSlbPort.hashCode() : 0);
            result = 31 * result + (this.intranetSlbProtocol != null ? this.intranetSlbProtocol.hashCode() : 0);
            result = 31 * result + (this.intranetTargetPort != null ? this.intranetTargetPort.hashCode() : 0);
            result = 31 * result + (this.isMultilingualApp != null ? this.isMultilingualApp.hashCode() : 0);
            result = 31 * result + (this.javaStartUpConfig != null ? this.javaStartUpConfig.hashCode() : 0);
            result = 31 * result + (this.jdk != null ? this.jdk.hashCode() : 0);
            result = 31 * result + (this.limitCpu != null ? this.limitCpu.hashCode() : 0);
            result = 31 * result + (this.limitMem != null ? this.limitMem.hashCode() : 0);
            result = 31 * result + (this.liveness != null ? this.liveness.hashCode() : 0);
            result = 31 * result + (this.localVolume != null ? this.localVolume.hashCode() : 0);
            result = 31 * result + (this.logicalRegionId != null ? this.logicalRegionId.hashCode() : 0);
            result = 31 * result + (this.mountDescs != null ? this.mountDescs.hashCode() : 0);
            result = 31 * result + (this.namespace != null ? this.namespace.hashCode() : 0);
            result = 31 * result + (this.nasId != null ? this.nasId.hashCode() : 0);
            result = 31 * result + (this.packageType != null ? this.packageType.hashCode() : 0);
            result = 31 * result + (this.packageUrl != null ? this.packageUrl.hashCode() : 0);
            result = 31 * result + (this.packageVersion != null ? this.packageVersion.hashCode() : 0);
            result = 31 * result + (this.postStart != null ? this.postStart.hashCode() : 0);
            result = 31 * result + (this.preStop != null ? this.preStop.hashCode() : 0);
            result = 31 * result + (this.readiness != null ? this.readiness.hashCode() : 0);
            result = 31 * result + (this.replicas != null ? this.replicas.hashCode() : 0);
            result = 31 * result + (this.repoId != null ? this.repoId.hashCode() : 0);
            result = 31 * result + (this.requestsCpu != null ? this.requestsCpu.hashCode() : 0);
            result = 31 * result + (this.requestsMem != null ? this.requestsMem.hashCode() : 0);
            result = 31 * result + (this.runtimeClassName != null ? this.runtimeClassName.hashCode() : 0);
            result = 31 * result + (this.slsConfigs != null ? this.slsConfigs.hashCode() : 0);
            result = 31 * result + (this.storageType != null ? this.storageType.hashCode() : 0);
            result = 31 * result + (this.timeout != null ? this.timeout.hashCode() : 0);
            result = 31 * result + (this.uriEncoding != null ? this.uriEncoding.hashCode() : 0);
            result = 31 * result + (this.useBodyEncoding != null ? this.useBodyEncoding.hashCode() : 0);
            result = 31 * result + (this.webContainer != null ? this.webContainer.hashCode() : 0);
            result = 31 * result + (this.webContainerConfig != null ? this.webContainerConfig.hashCode() : 0);
            return result;
        }
    }
}
