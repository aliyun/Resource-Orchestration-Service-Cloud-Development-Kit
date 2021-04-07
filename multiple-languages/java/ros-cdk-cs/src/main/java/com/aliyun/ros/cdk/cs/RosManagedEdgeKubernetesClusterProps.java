package com.aliyun.ros.cdk.cs;

/**
 * Properties for defining a `ALIYUN::CS::ManagedEdgeKubernetesCluster`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.27.0 (build 07d848a)", date = "2021-04-07T04:01:42.021Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cs.$Module.class, fqn = "@alicloud/ros-cdk-cs.RosManagedEdgeKubernetesClusterProps")
@software.amazon.jsii.Jsii.Proxy(RosManagedEdgeKubernetesClusterProps.Jsii$Proxy.class)
public interface RosManagedEdgeKubernetesClusterProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getNumOfNodes();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAddons() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCloudMonitorFlags() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getClusterSpec() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getContainerCidr() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDisableRollback() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEndpointPublicAccess() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getKeyPair() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLoginPassword() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getProfile() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getProxyMode() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getServiceCidr() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSnatEntry() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.cs.RosManagedEdgeKubernetesCluster.TagsProperty> getTags() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTimeoutMins() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVpcId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVSwitchIds() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getWorkerDataDisk() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getWorkerDataDiskCategory() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getWorkerDataDiskSize() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getWorkerInstanceTypes() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getWorkerSystemDiskCategory() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getWorkerSystemDiskSize() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosManagedEdgeKubernetesClusterProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosManagedEdgeKubernetesClusterProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosManagedEdgeKubernetesClusterProps> {
        private java.lang.Object name;
        private java.lang.Object numOfNodes;
        private java.lang.Object addons;
        private java.lang.Object cloudMonitorFlags;
        private java.lang.Object clusterSpec;
        private java.lang.Object containerCidr;
        private java.lang.Object disableRollback;
        private java.lang.Object endpointPublicAccess;
        private java.lang.Object keyPair;
        private java.lang.Object loginPassword;
        private java.lang.Object profile;
        private java.lang.Object proxyMode;
        private java.lang.Object serviceCidr;
        private java.lang.Object snatEntry;
        private java.util.List<com.aliyun.ros.cdk.cs.RosManagedEdgeKubernetesCluster.TagsProperty> tags;
        private java.lang.Object timeoutMins;
        private java.lang.Object vpcId;
        private java.lang.Object vSwitchIds;
        private java.lang.Object workerDataDisk;
        private java.lang.Object workerDataDiskCategory;
        private java.lang.Object workerDataDiskSize;
        private java.lang.Object workerInstanceTypes;
        private java.lang.Object workerSystemDiskCategory;
        private java.lang.Object workerSystemDiskSize;

        /**
         * Sets the value of {@link RosManagedEdgeKubernetesClusterProps#getName}
         * @param name the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder name(java.lang.String name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link RosManagedEdgeKubernetesClusterProps#getName}
         * @param name the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link RosManagedEdgeKubernetesClusterProps#getNumOfNodes}
         * @param numOfNodes the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder numOfNodes(java.lang.Number numOfNodes) {
            this.numOfNodes = numOfNodes;
            return this;
        }

        /**
         * Sets the value of {@link RosManagedEdgeKubernetesClusterProps#getNumOfNodes}
         * @param numOfNodes the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder numOfNodes(com.aliyun.ros.cdk.core.IResolvable numOfNodes) {
            this.numOfNodes = numOfNodes;
            return this;
        }

        /**
         * Sets the value of {@link RosManagedEdgeKubernetesClusterProps#getAddons}
         * @param addons the value to be set.
         * @return {@code this}
         */
        public Builder addons(com.aliyun.ros.cdk.core.IResolvable addons) {
            this.addons = addons;
            return this;
        }

        /**
         * Sets the value of {@link RosManagedEdgeKubernetesClusterProps#getAddons}
         * @param addons the value to be set.
         * @return {@code this}
         */
        public Builder addons(java.util.List<? extends java.lang.Object> addons) {
            this.addons = addons;
            return this;
        }

        /**
         * Sets the value of {@link RosManagedEdgeKubernetesClusterProps#getCloudMonitorFlags}
         * @param cloudMonitorFlags the value to be set.
         * @return {@code this}
         */
        public Builder cloudMonitorFlags(java.lang.Boolean cloudMonitorFlags) {
            this.cloudMonitorFlags = cloudMonitorFlags;
            return this;
        }

        /**
         * Sets the value of {@link RosManagedEdgeKubernetesClusterProps#getCloudMonitorFlags}
         * @param cloudMonitorFlags the value to be set.
         * @return {@code this}
         */
        public Builder cloudMonitorFlags(com.aliyun.ros.cdk.core.IResolvable cloudMonitorFlags) {
            this.cloudMonitorFlags = cloudMonitorFlags;
            return this;
        }

        /**
         * Sets the value of {@link RosManagedEdgeKubernetesClusterProps#getClusterSpec}
         * @param clusterSpec the value to be set.
         * @return {@code this}
         */
        public Builder clusterSpec(java.lang.String clusterSpec) {
            this.clusterSpec = clusterSpec;
            return this;
        }

        /**
         * Sets the value of {@link RosManagedEdgeKubernetesClusterProps#getClusterSpec}
         * @param clusterSpec the value to be set.
         * @return {@code this}
         */
        public Builder clusterSpec(com.aliyun.ros.cdk.core.IResolvable clusterSpec) {
            this.clusterSpec = clusterSpec;
            return this;
        }

        /**
         * Sets the value of {@link RosManagedEdgeKubernetesClusterProps#getContainerCidr}
         * @param containerCidr the value to be set.
         * @return {@code this}
         */
        public Builder containerCidr(java.lang.String containerCidr) {
            this.containerCidr = containerCidr;
            return this;
        }

        /**
         * Sets the value of {@link RosManagedEdgeKubernetesClusterProps#getContainerCidr}
         * @param containerCidr the value to be set.
         * @return {@code this}
         */
        public Builder containerCidr(com.aliyun.ros.cdk.core.IResolvable containerCidr) {
            this.containerCidr = containerCidr;
            return this;
        }

        /**
         * Sets the value of {@link RosManagedEdgeKubernetesClusterProps#getDisableRollback}
         * @param disableRollback the value to be set.
         * @return {@code this}
         */
        public Builder disableRollback(java.lang.Boolean disableRollback) {
            this.disableRollback = disableRollback;
            return this;
        }

        /**
         * Sets the value of {@link RosManagedEdgeKubernetesClusterProps#getDisableRollback}
         * @param disableRollback the value to be set.
         * @return {@code this}
         */
        public Builder disableRollback(com.aliyun.ros.cdk.core.IResolvable disableRollback) {
            this.disableRollback = disableRollback;
            return this;
        }

        /**
         * Sets the value of {@link RosManagedEdgeKubernetesClusterProps#getEndpointPublicAccess}
         * @param endpointPublicAccess the value to be set.
         * @return {@code this}
         */
        public Builder endpointPublicAccess(java.lang.Boolean endpointPublicAccess) {
            this.endpointPublicAccess = endpointPublicAccess;
            return this;
        }

        /**
         * Sets the value of {@link RosManagedEdgeKubernetesClusterProps#getEndpointPublicAccess}
         * @param endpointPublicAccess the value to be set.
         * @return {@code this}
         */
        public Builder endpointPublicAccess(com.aliyun.ros.cdk.core.IResolvable endpointPublicAccess) {
            this.endpointPublicAccess = endpointPublicAccess;
            return this;
        }

        /**
         * Sets the value of {@link RosManagedEdgeKubernetesClusterProps#getKeyPair}
         * @param keyPair the value to be set.
         * @return {@code this}
         */
        public Builder keyPair(java.lang.String keyPair) {
            this.keyPair = keyPair;
            return this;
        }

        /**
         * Sets the value of {@link RosManagedEdgeKubernetesClusterProps#getKeyPair}
         * @param keyPair the value to be set.
         * @return {@code this}
         */
        public Builder keyPair(com.aliyun.ros.cdk.core.IResolvable keyPair) {
            this.keyPair = keyPair;
            return this;
        }

        /**
         * Sets the value of {@link RosManagedEdgeKubernetesClusterProps#getLoginPassword}
         * @param loginPassword the value to be set.
         * @return {@code this}
         */
        public Builder loginPassword(java.lang.String loginPassword) {
            this.loginPassword = loginPassword;
            return this;
        }

        /**
         * Sets the value of {@link RosManagedEdgeKubernetesClusterProps#getLoginPassword}
         * @param loginPassword the value to be set.
         * @return {@code this}
         */
        public Builder loginPassword(com.aliyun.ros.cdk.core.IResolvable loginPassword) {
            this.loginPassword = loginPassword;
            return this;
        }

        /**
         * Sets the value of {@link RosManagedEdgeKubernetesClusterProps#getProfile}
         * @param profile the value to be set.
         * @return {@code this}
         */
        public Builder profile(java.lang.String profile) {
            this.profile = profile;
            return this;
        }

        /**
         * Sets the value of {@link RosManagedEdgeKubernetesClusterProps#getProfile}
         * @param profile the value to be set.
         * @return {@code this}
         */
        public Builder profile(com.aliyun.ros.cdk.core.IResolvable profile) {
            this.profile = profile;
            return this;
        }

        /**
         * Sets the value of {@link RosManagedEdgeKubernetesClusterProps#getProxyMode}
         * @param proxyMode the value to be set.
         * @return {@code this}
         */
        public Builder proxyMode(java.lang.String proxyMode) {
            this.proxyMode = proxyMode;
            return this;
        }

        /**
         * Sets the value of {@link RosManagedEdgeKubernetesClusterProps#getProxyMode}
         * @param proxyMode the value to be set.
         * @return {@code this}
         */
        public Builder proxyMode(com.aliyun.ros.cdk.core.IResolvable proxyMode) {
            this.proxyMode = proxyMode;
            return this;
        }

        /**
         * Sets the value of {@link RosManagedEdgeKubernetesClusterProps#getServiceCidr}
         * @param serviceCidr the value to be set.
         * @return {@code this}
         */
        public Builder serviceCidr(java.lang.String serviceCidr) {
            this.serviceCidr = serviceCidr;
            return this;
        }

        /**
         * Sets the value of {@link RosManagedEdgeKubernetesClusterProps#getServiceCidr}
         * @param serviceCidr the value to be set.
         * @return {@code this}
         */
        public Builder serviceCidr(com.aliyun.ros.cdk.core.IResolvable serviceCidr) {
            this.serviceCidr = serviceCidr;
            return this;
        }

        /**
         * Sets the value of {@link RosManagedEdgeKubernetesClusterProps#getSnatEntry}
         * @param snatEntry the value to be set.
         * @return {@code this}
         */
        public Builder snatEntry(java.lang.Boolean snatEntry) {
            this.snatEntry = snatEntry;
            return this;
        }

        /**
         * Sets the value of {@link RosManagedEdgeKubernetesClusterProps#getSnatEntry}
         * @param snatEntry the value to be set.
         * @return {@code this}
         */
        public Builder snatEntry(com.aliyun.ros.cdk.core.IResolvable snatEntry) {
            this.snatEntry = snatEntry;
            return this;
        }

        /**
         * Sets the value of {@link RosManagedEdgeKubernetesClusterProps#getTags}
         * @param tags the value to be set.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.cs.RosManagedEdgeKubernetesCluster.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.cs.RosManagedEdgeKubernetesCluster.TagsProperty>)tags;
            return this;
        }

        /**
         * Sets the value of {@link RosManagedEdgeKubernetesClusterProps#getTimeoutMins}
         * @param timeoutMins the value to be set.
         * @return {@code this}
         */
        public Builder timeoutMins(java.lang.Number timeoutMins) {
            this.timeoutMins = timeoutMins;
            return this;
        }

        /**
         * Sets the value of {@link RosManagedEdgeKubernetesClusterProps#getTimeoutMins}
         * @param timeoutMins the value to be set.
         * @return {@code this}
         */
        public Builder timeoutMins(com.aliyun.ros.cdk.core.IResolvable timeoutMins) {
            this.timeoutMins = timeoutMins;
            return this;
        }

        /**
         * Sets the value of {@link RosManagedEdgeKubernetesClusterProps#getVpcId}
         * @param vpcId the value to be set.
         * @return {@code this}
         */
        public Builder vpcId(java.lang.String vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link RosManagedEdgeKubernetesClusterProps#getVpcId}
         * @param vpcId the value to be set.
         * @return {@code this}
         */
        public Builder vpcId(com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link RosManagedEdgeKubernetesClusterProps#getVSwitchIds}
         * @param vSwitchIds the value to be set.
         * @return {@code this}
         */
        public Builder vSwitchIds(java.util.List<? extends java.lang.Object> vSwitchIds) {
            this.vSwitchIds = vSwitchIds;
            return this;
        }

        /**
         * Sets the value of {@link RosManagedEdgeKubernetesClusterProps#getVSwitchIds}
         * @param vSwitchIds the value to be set.
         * @return {@code this}
         */
        public Builder vSwitchIds(com.aliyun.ros.cdk.core.IResolvable vSwitchIds) {
            this.vSwitchIds = vSwitchIds;
            return this;
        }

        /**
         * Sets the value of {@link RosManagedEdgeKubernetesClusterProps#getWorkerDataDisk}
         * @param workerDataDisk the value to be set.
         * @return {@code this}
         */
        public Builder workerDataDisk(java.lang.Boolean workerDataDisk) {
            this.workerDataDisk = workerDataDisk;
            return this;
        }

        /**
         * Sets the value of {@link RosManagedEdgeKubernetesClusterProps#getWorkerDataDisk}
         * @param workerDataDisk the value to be set.
         * @return {@code this}
         */
        public Builder workerDataDisk(com.aliyun.ros.cdk.core.IResolvable workerDataDisk) {
            this.workerDataDisk = workerDataDisk;
            return this;
        }

        /**
         * Sets the value of {@link RosManagedEdgeKubernetesClusterProps#getWorkerDataDiskCategory}
         * @param workerDataDiskCategory the value to be set.
         * @return {@code this}
         */
        public Builder workerDataDiskCategory(java.lang.String workerDataDiskCategory) {
            this.workerDataDiskCategory = workerDataDiskCategory;
            return this;
        }

        /**
         * Sets the value of {@link RosManagedEdgeKubernetesClusterProps#getWorkerDataDiskCategory}
         * @param workerDataDiskCategory the value to be set.
         * @return {@code this}
         */
        public Builder workerDataDiskCategory(com.aliyun.ros.cdk.core.IResolvable workerDataDiskCategory) {
            this.workerDataDiskCategory = workerDataDiskCategory;
            return this;
        }

        /**
         * Sets the value of {@link RosManagedEdgeKubernetesClusterProps#getWorkerDataDiskSize}
         * @param workerDataDiskSize the value to be set.
         * @return {@code this}
         */
        public Builder workerDataDiskSize(java.lang.Number workerDataDiskSize) {
            this.workerDataDiskSize = workerDataDiskSize;
            return this;
        }

        /**
         * Sets the value of {@link RosManagedEdgeKubernetesClusterProps#getWorkerDataDiskSize}
         * @param workerDataDiskSize the value to be set.
         * @return {@code this}
         */
        public Builder workerDataDiskSize(com.aliyun.ros.cdk.core.IResolvable workerDataDiskSize) {
            this.workerDataDiskSize = workerDataDiskSize;
            return this;
        }

        /**
         * Sets the value of {@link RosManagedEdgeKubernetesClusterProps#getWorkerInstanceTypes}
         * @param workerInstanceTypes the value to be set.
         * @return {@code this}
         */
        public Builder workerInstanceTypes(com.aliyun.ros.cdk.core.IResolvable workerInstanceTypes) {
            this.workerInstanceTypes = workerInstanceTypes;
            return this;
        }

        /**
         * Sets the value of {@link RosManagedEdgeKubernetesClusterProps#getWorkerInstanceTypes}
         * @param workerInstanceTypes the value to be set.
         * @return {@code this}
         */
        public Builder workerInstanceTypes(java.util.List<? extends java.lang.Object> workerInstanceTypes) {
            this.workerInstanceTypes = workerInstanceTypes;
            return this;
        }

        /**
         * Sets the value of {@link RosManagedEdgeKubernetesClusterProps#getWorkerSystemDiskCategory}
         * @param workerSystemDiskCategory the value to be set.
         * @return {@code this}
         */
        public Builder workerSystemDiskCategory(java.lang.String workerSystemDiskCategory) {
            this.workerSystemDiskCategory = workerSystemDiskCategory;
            return this;
        }

        /**
         * Sets the value of {@link RosManagedEdgeKubernetesClusterProps#getWorkerSystemDiskCategory}
         * @param workerSystemDiskCategory the value to be set.
         * @return {@code this}
         */
        public Builder workerSystemDiskCategory(com.aliyun.ros.cdk.core.IResolvable workerSystemDiskCategory) {
            this.workerSystemDiskCategory = workerSystemDiskCategory;
            return this;
        }

        /**
         * Sets the value of {@link RosManagedEdgeKubernetesClusterProps#getWorkerSystemDiskSize}
         * @param workerSystemDiskSize the value to be set.
         * @return {@code this}
         */
        public Builder workerSystemDiskSize(java.lang.Number workerSystemDiskSize) {
            this.workerSystemDiskSize = workerSystemDiskSize;
            return this;
        }

        /**
         * Sets the value of {@link RosManagedEdgeKubernetesClusterProps#getWorkerSystemDiskSize}
         * @param workerSystemDiskSize the value to be set.
         * @return {@code this}
         */
        public Builder workerSystemDiskSize(com.aliyun.ros.cdk.core.IResolvable workerSystemDiskSize) {
            this.workerSystemDiskSize = workerSystemDiskSize;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosManagedEdgeKubernetesClusterProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosManagedEdgeKubernetesClusterProps build() {
            return new Jsii$Proxy(name, numOfNodes, addons, cloudMonitorFlags, clusterSpec, containerCidr, disableRollback, endpointPublicAccess, keyPair, loginPassword, profile, proxyMode, serviceCidr, snatEntry, tags, timeoutMins, vpcId, vSwitchIds, workerDataDisk, workerDataDiskCategory, workerDataDiskSize, workerInstanceTypes, workerSystemDiskCategory, workerSystemDiskSize);
        }
    }

    /**
     * An implementation for {@link RosManagedEdgeKubernetesClusterProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosManagedEdgeKubernetesClusterProps {
        private final java.lang.Object name;
        private final java.lang.Object numOfNodes;
        private final java.lang.Object addons;
        private final java.lang.Object cloudMonitorFlags;
        private final java.lang.Object clusterSpec;
        private final java.lang.Object containerCidr;
        private final java.lang.Object disableRollback;
        private final java.lang.Object endpointPublicAccess;
        private final java.lang.Object keyPair;
        private final java.lang.Object loginPassword;
        private final java.lang.Object profile;
        private final java.lang.Object proxyMode;
        private final java.lang.Object serviceCidr;
        private final java.lang.Object snatEntry;
        private final java.util.List<com.aliyun.ros.cdk.cs.RosManagedEdgeKubernetesCluster.TagsProperty> tags;
        private final java.lang.Object timeoutMins;
        private final java.lang.Object vpcId;
        private final java.lang.Object vSwitchIds;
        private final java.lang.Object workerDataDisk;
        private final java.lang.Object workerDataDiskCategory;
        private final java.lang.Object workerDataDiskSize;
        private final java.lang.Object workerInstanceTypes;
        private final java.lang.Object workerSystemDiskCategory;
        private final java.lang.Object workerSystemDiskSize;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.numOfNodes = software.amazon.jsii.Kernel.get(this, "numOfNodes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.addons = software.amazon.jsii.Kernel.get(this, "addons", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.cloudMonitorFlags = software.amazon.jsii.Kernel.get(this, "cloudMonitorFlags", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.clusterSpec = software.amazon.jsii.Kernel.get(this, "clusterSpec", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.containerCidr = software.amazon.jsii.Kernel.get(this, "containerCidr", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.disableRollback = software.amazon.jsii.Kernel.get(this, "disableRollback", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.endpointPublicAccess = software.amazon.jsii.Kernel.get(this, "endpointPublicAccess", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.keyPair = software.amazon.jsii.Kernel.get(this, "keyPair", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.loginPassword = software.amazon.jsii.Kernel.get(this, "loginPassword", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.profile = software.amazon.jsii.Kernel.get(this, "profile", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.proxyMode = software.amazon.jsii.Kernel.get(this, "proxyMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.serviceCidr = software.amazon.jsii.Kernel.get(this, "serviceCidr", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.snatEntry = software.amazon.jsii.Kernel.get(this, "snatEntry", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cs.RosManagedEdgeKubernetesCluster.TagsProperty.class)));
            this.timeoutMins = software.amazon.jsii.Kernel.get(this, "timeoutMins", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vpcId = software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vSwitchIds = software.amazon.jsii.Kernel.get(this, "vSwitchIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.workerDataDisk = software.amazon.jsii.Kernel.get(this, "workerDataDisk", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.workerDataDiskCategory = software.amazon.jsii.Kernel.get(this, "workerDataDiskCategory", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.workerDataDiskSize = software.amazon.jsii.Kernel.get(this, "workerDataDiskSize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.workerInstanceTypes = software.amazon.jsii.Kernel.get(this, "workerInstanceTypes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.workerSystemDiskCategory = software.amazon.jsii.Kernel.get(this, "workerSystemDiskCategory", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.workerSystemDiskSize = software.amazon.jsii.Kernel.get(this, "workerSystemDiskSize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final java.lang.Object name, final java.lang.Object numOfNodes, final java.lang.Object addons, final java.lang.Object cloudMonitorFlags, final java.lang.Object clusterSpec, final java.lang.Object containerCidr, final java.lang.Object disableRollback, final java.lang.Object endpointPublicAccess, final java.lang.Object keyPair, final java.lang.Object loginPassword, final java.lang.Object profile, final java.lang.Object proxyMode, final java.lang.Object serviceCidr, final java.lang.Object snatEntry, final java.util.List<? extends com.aliyun.ros.cdk.cs.RosManagedEdgeKubernetesCluster.TagsProperty> tags, final java.lang.Object timeoutMins, final java.lang.Object vpcId, final java.lang.Object vSwitchIds, final java.lang.Object workerDataDisk, final java.lang.Object workerDataDiskCategory, final java.lang.Object workerDataDiskSize, final java.lang.Object workerInstanceTypes, final java.lang.Object workerSystemDiskCategory, final java.lang.Object workerSystemDiskSize) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.name = java.util.Objects.requireNonNull(name, "name is required");
            this.numOfNodes = java.util.Objects.requireNonNull(numOfNodes, "numOfNodes is required");
            this.addons = addons;
            this.cloudMonitorFlags = cloudMonitorFlags;
            this.clusterSpec = clusterSpec;
            this.containerCidr = containerCidr;
            this.disableRollback = disableRollback;
            this.endpointPublicAccess = endpointPublicAccess;
            this.keyPair = keyPair;
            this.loginPassword = loginPassword;
            this.profile = profile;
            this.proxyMode = proxyMode;
            this.serviceCidr = serviceCidr;
            this.snatEntry = snatEntry;
            this.tags = (java.util.List<com.aliyun.ros.cdk.cs.RosManagedEdgeKubernetesCluster.TagsProperty>)tags;
            this.timeoutMins = timeoutMins;
            this.vpcId = vpcId;
            this.vSwitchIds = vSwitchIds;
            this.workerDataDisk = workerDataDisk;
            this.workerDataDiskCategory = workerDataDiskCategory;
            this.workerDataDiskSize = workerDataDiskSize;
            this.workerInstanceTypes = workerInstanceTypes;
            this.workerSystemDiskCategory = workerSystemDiskCategory;
            this.workerSystemDiskSize = workerSystemDiskSize;
        }

        @Override
        public final java.lang.Object getName() {
            return this.name;
        }

        @Override
        public final java.lang.Object getNumOfNodes() {
            return this.numOfNodes;
        }

        @Override
        public final java.lang.Object getAddons() {
            return this.addons;
        }

        @Override
        public final java.lang.Object getCloudMonitorFlags() {
            return this.cloudMonitorFlags;
        }

        @Override
        public final java.lang.Object getClusterSpec() {
            return this.clusterSpec;
        }

        @Override
        public final java.lang.Object getContainerCidr() {
            return this.containerCidr;
        }

        @Override
        public final java.lang.Object getDisableRollback() {
            return this.disableRollback;
        }

        @Override
        public final java.lang.Object getEndpointPublicAccess() {
            return this.endpointPublicAccess;
        }

        @Override
        public final java.lang.Object getKeyPair() {
            return this.keyPair;
        }

        @Override
        public final java.lang.Object getLoginPassword() {
            return this.loginPassword;
        }

        @Override
        public final java.lang.Object getProfile() {
            return this.profile;
        }

        @Override
        public final java.lang.Object getProxyMode() {
            return this.proxyMode;
        }

        @Override
        public final java.lang.Object getServiceCidr() {
            return this.serviceCidr;
        }

        @Override
        public final java.lang.Object getSnatEntry() {
            return this.snatEntry;
        }

        @Override
        public final java.util.List<com.aliyun.ros.cdk.cs.RosManagedEdgeKubernetesCluster.TagsProperty> getTags() {
            return this.tags;
        }

        @Override
        public final java.lang.Object getTimeoutMins() {
            return this.timeoutMins;
        }

        @Override
        public final java.lang.Object getVpcId() {
            return this.vpcId;
        }

        @Override
        public final java.lang.Object getVSwitchIds() {
            return this.vSwitchIds;
        }

        @Override
        public final java.lang.Object getWorkerDataDisk() {
            return this.workerDataDisk;
        }

        @Override
        public final java.lang.Object getWorkerDataDiskCategory() {
            return this.workerDataDiskCategory;
        }

        @Override
        public final java.lang.Object getWorkerDataDiskSize() {
            return this.workerDataDiskSize;
        }

        @Override
        public final java.lang.Object getWorkerInstanceTypes() {
            return this.workerInstanceTypes;
        }

        @Override
        public final java.lang.Object getWorkerSystemDiskCategory() {
            return this.workerSystemDiskCategory;
        }

        @Override
        public final java.lang.Object getWorkerSystemDiskSize() {
            return this.workerSystemDiskSize;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("name", om.valueToTree(this.getName()));
            data.set("numOfNodes", om.valueToTree(this.getNumOfNodes()));
            if (this.getAddons() != null) {
                data.set("addons", om.valueToTree(this.getAddons()));
            }
            if (this.getCloudMonitorFlags() != null) {
                data.set("cloudMonitorFlags", om.valueToTree(this.getCloudMonitorFlags()));
            }
            if (this.getClusterSpec() != null) {
                data.set("clusterSpec", om.valueToTree(this.getClusterSpec()));
            }
            if (this.getContainerCidr() != null) {
                data.set("containerCidr", om.valueToTree(this.getContainerCidr()));
            }
            if (this.getDisableRollback() != null) {
                data.set("disableRollback", om.valueToTree(this.getDisableRollback()));
            }
            if (this.getEndpointPublicAccess() != null) {
                data.set("endpointPublicAccess", om.valueToTree(this.getEndpointPublicAccess()));
            }
            if (this.getKeyPair() != null) {
                data.set("keyPair", om.valueToTree(this.getKeyPair()));
            }
            if (this.getLoginPassword() != null) {
                data.set("loginPassword", om.valueToTree(this.getLoginPassword()));
            }
            if (this.getProfile() != null) {
                data.set("profile", om.valueToTree(this.getProfile()));
            }
            if (this.getProxyMode() != null) {
                data.set("proxyMode", om.valueToTree(this.getProxyMode()));
            }
            if (this.getServiceCidr() != null) {
                data.set("serviceCidr", om.valueToTree(this.getServiceCidr()));
            }
            if (this.getSnatEntry() != null) {
                data.set("snatEntry", om.valueToTree(this.getSnatEntry()));
            }
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }
            if (this.getTimeoutMins() != null) {
                data.set("timeoutMins", om.valueToTree(this.getTimeoutMins()));
            }
            if (this.getVpcId() != null) {
                data.set("vpcId", om.valueToTree(this.getVpcId()));
            }
            if (this.getVSwitchIds() != null) {
                data.set("vSwitchIds", om.valueToTree(this.getVSwitchIds()));
            }
            if (this.getWorkerDataDisk() != null) {
                data.set("workerDataDisk", om.valueToTree(this.getWorkerDataDisk()));
            }
            if (this.getWorkerDataDiskCategory() != null) {
                data.set("workerDataDiskCategory", om.valueToTree(this.getWorkerDataDiskCategory()));
            }
            if (this.getWorkerDataDiskSize() != null) {
                data.set("workerDataDiskSize", om.valueToTree(this.getWorkerDataDiskSize()));
            }
            if (this.getWorkerInstanceTypes() != null) {
                data.set("workerInstanceTypes", om.valueToTree(this.getWorkerInstanceTypes()));
            }
            if (this.getWorkerSystemDiskCategory() != null) {
                data.set("workerSystemDiskCategory", om.valueToTree(this.getWorkerSystemDiskCategory()));
            }
            if (this.getWorkerSystemDiskSize() != null) {
                data.set("workerSystemDiskSize", om.valueToTree(this.getWorkerSystemDiskSize()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cs.RosManagedEdgeKubernetesClusterProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosManagedEdgeKubernetesClusterProps.Jsii$Proxy that = (RosManagedEdgeKubernetesClusterProps.Jsii$Proxy) o;

            if (!name.equals(that.name)) return false;
            if (!numOfNodes.equals(that.numOfNodes)) return false;
            if (this.addons != null ? !this.addons.equals(that.addons) : that.addons != null) return false;
            if (this.cloudMonitorFlags != null ? !this.cloudMonitorFlags.equals(that.cloudMonitorFlags) : that.cloudMonitorFlags != null) return false;
            if (this.clusterSpec != null ? !this.clusterSpec.equals(that.clusterSpec) : that.clusterSpec != null) return false;
            if (this.containerCidr != null ? !this.containerCidr.equals(that.containerCidr) : that.containerCidr != null) return false;
            if (this.disableRollback != null ? !this.disableRollback.equals(that.disableRollback) : that.disableRollback != null) return false;
            if (this.endpointPublicAccess != null ? !this.endpointPublicAccess.equals(that.endpointPublicAccess) : that.endpointPublicAccess != null) return false;
            if (this.keyPair != null ? !this.keyPair.equals(that.keyPair) : that.keyPair != null) return false;
            if (this.loginPassword != null ? !this.loginPassword.equals(that.loginPassword) : that.loginPassword != null) return false;
            if (this.profile != null ? !this.profile.equals(that.profile) : that.profile != null) return false;
            if (this.proxyMode != null ? !this.proxyMode.equals(that.proxyMode) : that.proxyMode != null) return false;
            if (this.serviceCidr != null ? !this.serviceCidr.equals(that.serviceCidr) : that.serviceCidr != null) return false;
            if (this.snatEntry != null ? !this.snatEntry.equals(that.snatEntry) : that.snatEntry != null) return false;
            if (this.tags != null ? !this.tags.equals(that.tags) : that.tags != null) return false;
            if (this.timeoutMins != null ? !this.timeoutMins.equals(that.timeoutMins) : that.timeoutMins != null) return false;
            if (this.vpcId != null ? !this.vpcId.equals(that.vpcId) : that.vpcId != null) return false;
            if (this.vSwitchIds != null ? !this.vSwitchIds.equals(that.vSwitchIds) : that.vSwitchIds != null) return false;
            if (this.workerDataDisk != null ? !this.workerDataDisk.equals(that.workerDataDisk) : that.workerDataDisk != null) return false;
            if (this.workerDataDiskCategory != null ? !this.workerDataDiskCategory.equals(that.workerDataDiskCategory) : that.workerDataDiskCategory != null) return false;
            if (this.workerDataDiskSize != null ? !this.workerDataDiskSize.equals(that.workerDataDiskSize) : that.workerDataDiskSize != null) return false;
            if (this.workerInstanceTypes != null ? !this.workerInstanceTypes.equals(that.workerInstanceTypes) : that.workerInstanceTypes != null) return false;
            if (this.workerSystemDiskCategory != null ? !this.workerSystemDiskCategory.equals(that.workerSystemDiskCategory) : that.workerSystemDiskCategory != null) return false;
            return this.workerSystemDiskSize != null ? this.workerSystemDiskSize.equals(that.workerSystemDiskSize) : that.workerSystemDiskSize == null;
        }

        @Override
        public final int hashCode() {
            int result = this.name.hashCode();
            result = 31 * result + (this.numOfNodes.hashCode());
            result = 31 * result + (this.addons != null ? this.addons.hashCode() : 0);
            result = 31 * result + (this.cloudMonitorFlags != null ? this.cloudMonitorFlags.hashCode() : 0);
            result = 31 * result + (this.clusterSpec != null ? this.clusterSpec.hashCode() : 0);
            result = 31 * result + (this.containerCidr != null ? this.containerCidr.hashCode() : 0);
            result = 31 * result + (this.disableRollback != null ? this.disableRollback.hashCode() : 0);
            result = 31 * result + (this.endpointPublicAccess != null ? this.endpointPublicAccess.hashCode() : 0);
            result = 31 * result + (this.keyPair != null ? this.keyPair.hashCode() : 0);
            result = 31 * result + (this.loginPassword != null ? this.loginPassword.hashCode() : 0);
            result = 31 * result + (this.profile != null ? this.profile.hashCode() : 0);
            result = 31 * result + (this.proxyMode != null ? this.proxyMode.hashCode() : 0);
            result = 31 * result + (this.serviceCidr != null ? this.serviceCidr.hashCode() : 0);
            result = 31 * result + (this.snatEntry != null ? this.snatEntry.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            result = 31 * result + (this.timeoutMins != null ? this.timeoutMins.hashCode() : 0);
            result = 31 * result + (this.vpcId != null ? this.vpcId.hashCode() : 0);
            result = 31 * result + (this.vSwitchIds != null ? this.vSwitchIds.hashCode() : 0);
            result = 31 * result + (this.workerDataDisk != null ? this.workerDataDisk.hashCode() : 0);
            result = 31 * result + (this.workerDataDiskCategory != null ? this.workerDataDiskCategory.hashCode() : 0);
            result = 31 * result + (this.workerDataDiskSize != null ? this.workerDataDiskSize.hashCode() : 0);
            result = 31 * result + (this.workerInstanceTypes != null ? this.workerInstanceTypes.hashCode() : 0);
            result = 31 * result + (this.workerSystemDiskCategory != null ? this.workerSystemDiskCategory.hashCode() : 0);
            result = 31 * result + (this.workerSystemDiskSize != null ? this.workerSystemDiskSize.hashCode() : 0);
            return result;
        }
    }
}
