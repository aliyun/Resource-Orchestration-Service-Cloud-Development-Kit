package com.aliyun.ros.cdk.emr;

/**
 * Properties for defining a <code>RosLivyCompute</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-emr-livycompute
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-08-31T08:59:08.322Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.emr.$Module.class, fqn = "@alicloud/ros-cdk-emr.RosLivyComputeProps")
@software.amazon.jsii.Jsii.Proxy(RosLivyComputeProps.Jsii$Proxy.class)
public interface RosLivyComputeProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAuthType();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getCpuLimit();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDisplayReleaseVersion();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getLivyVersion();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getMemoryLimit();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getQueueName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getWorkspaceBizId();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAutoStartConfiguration() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAutoStopConfiguration() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEnablePublic() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEnvironmentId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getFusion() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLivyServerConf() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getNetworkName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getReleaseVersion() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosLivyComputeProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosLivyComputeProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosLivyComputeProps> {
        java.lang.Object authType;
        java.lang.Object cpuLimit;
        java.lang.Object displayReleaseVersion;
        java.lang.Object livyVersion;
        java.lang.Object memoryLimit;
        java.lang.Object name;
        java.lang.Object queueName;
        java.lang.Object workspaceBizId;
        java.lang.Object autoStartConfiguration;
        java.lang.Object autoStopConfiguration;
        java.lang.Object enablePublic;
        java.lang.Object environmentId;
        java.lang.Object fusion;
        java.lang.Object livyServerConf;
        java.lang.Object networkName;
        java.lang.Object releaseVersion;

        /**
         * Sets the value of {@link RosLivyComputeProps#getAuthType}
         * @param authType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder authType(java.lang.String authType) {
            this.authType = authType;
            return this;
        }

        /**
         * Sets the value of {@link RosLivyComputeProps#getAuthType}
         * @param authType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder authType(com.aliyun.ros.cdk.core.IResolvable authType) {
            this.authType = authType;
            return this;
        }

        /**
         * Sets the value of {@link RosLivyComputeProps#getCpuLimit}
         * @param cpuLimit the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder cpuLimit(java.lang.String cpuLimit) {
            this.cpuLimit = cpuLimit;
            return this;
        }

        /**
         * Sets the value of {@link RosLivyComputeProps#getCpuLimit}
         * @param cpuLimit the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder cpuLimit(com.aliyun.ros.cdk.core.IResolvable cpuLimit) {
            this.cpuLimit = cpuLimit;
            return this;
        }

        /**
         * Sets the value of {@link RosLivyComputeProps#getDisplayReleaseVersion}
         * @param displayReleaseVersion the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder displayReleaseVersion(java.lang.String displayReleaseVersion) {
            this.displayReleaseVersion = displayReleaseVersion;
            return this;
        }

        /**
         * Sets the value of {@link RosLivyComputeProps#getDisplayReleaseVersion}
         * @param displayReleaseVersion the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder displayReleaseVersion(com.aliyun.ros.cdk.core.IResolvable displayReleaseVersion) {
            this.displayReleaseVersion = displayReleaseVersion;
            return this;
        }

        /**
         * Sets the value of {@link RosLivyComputeProps#getLivyVersion}
         * @param livyVersion the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder livyVersion(java.lang.String livyVersion) {
            this.livyVersion = livyVersion;
            return this;
        }

        /**
         * Sets the value of {@link RosLivyComputeProps#getLivyVersion}
         * @param livyVersion the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder livyVersion(com.aliyun.ros.cdk.core.IResolvable livyVersion) {
            this.livyVersion = livyVersion;
            return this;
        }

        /**
         * Sets the value of {@link RosLivyComputeProps#getMemoryLimit}
         * @param memoryLimit the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder memoryLimit(java.lang.String memoryLimit) {
            this.memoryLimit = memoryLimit;
            return this;
        }

        /**
         * Sets the value of {@link RosLivyComputeProps#getMemoryLimit}
         * @param memoryLimit the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder memoryLimit(com.aliyun.ros.cdk.core.IResolvable memoryLimit) {
            this.memoryLimit = memoryLimit;
            return this;
        }

        /**
         * Sets the value of {@link RosLivyComputeProps#getName}
         * @param name the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder name(java.lang.String name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link RosLivyComputeProps#getName}
         * @param name the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link RosLivyComputeProps#getQueueName}
         * @param queueName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder queueName(java.lang.String queueName) {
            this.queueName = queueName;
            return this;
        }

        /**
         * Sets the value of {@link RosLivyComputeProps#getQueueName}
         * @param queueName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder queueName(com.aliyun.ros.cdk.core.IResolvable queueName) {
            this.queueName = queueName;
            return this;
        }

        /**
         * Sets the value of {@link RosLivyComputeProps#getWorkspaceBizId}
         * @param workspaceBizId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder workspaceBizId(java.lang.String workspaceBizId) {
            this.workspaceBizId = workspaceBizId;
            return this;
        }

        /**
         * Sets the value of {@link RosLivyComputeProps#getWorkspaceBizId}
         * @param workspaceBizId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder workspaceBizId(com.aliyun.ros.cdk.core.IResolvable workspaceBizId) {
            this.workspaceBizId = workspaceBizId;
            return this;
        }

        /**
         * Sets the value of {@link RosLivyComputeProps#getAutoStartConfiguration}
         * @param autoStartConfiguration the value to be set.
         * @return {@code this}
         */
        public Builder autoStartConfiguration(com.aliyun.ros.cdk.core.IResolvable autoStartConfiguration) {
            this.autoStartConfiguration = autoStartConfiguration;
            return this;
        }

        /**
         * Sets the value of {@link RosLivyComputeProps#getAutoStartConfiguration}
         * @param autoStartConfiguration the value to be set.
         * @return {@code this}
         */
        public Builder autoStartConfiguration(com.aliyun.ros.cdk.emr.RosLivyCompute.AutoStartConfigurationProperty autoStartConfiguration) {
            this.autoStartConfiguration = autoStartConfiguration;
            return this;
        }

        /**
         * Sets the value of {@link RosLivyComputeProps#getAutoStopConfiguration}
         * @param autoStopConfiguration the value to be set.
         * @return {@code this}
         */
        public Builder autoStopConfiguration(com.aliyun.ros.cdk.core.IResolvable autoStopConfiguration) {
            this.autoStopConfiguration = autoStopConfiguration;
            return this;
        }

        /**
         * Sets the value of {@link RosLivyComputeProps#getAutoStopConfiguration}
         * @param autoStopConfiguration the value to be set.
         * @return {@code this}
         */
        public Builder autoStopConfiguration(com.aliyun.ros.cdk.emr.RosLivyCompute.AutoStopConfigurationProperty autoStopConfiguration) {
            this.autoStopConfiguration = autoStopConfiguration;
            return this;
        }

        /**
         * Sets the value of {@link RosLivyComputeProps#getEnablePublic}
         * @param enablePublic the value to be set.
         * @return {@code this}
         */
        public Builder enablePublic(java.lang.Boolean enablePublic) {
            this.enablePublic = enablePublic;
            return this;
        }

        /**
         * Sets the value of {@link RosLivyComputeProps#getEnablePublic}
         * @param enablePublic the value to be set.
         * @return {@code this}
         */
        public Builder enablePublic(com.aliyun.ros.cdk.core.IResolvable enablePublic) {
            this.enablePublic = enablePublic;
            return this;
        }

        /**
         * Sets the value of {@link RosLivyComputeProps#getEnvironmentId}
         * @param environmentId the value to be set.
         * @return {@code this}
         */
        public Builder environmentId(java.lang.String environmentId) {
            this.environmentId = environmentId;
            return this;
        }

        /**
         * Sets the value of {@link RosLivyComputeProps#getEnvironmentId}
         * @param environmentId the value to be set.
         * @return {@code this}
         */
        public Builder environmentId(com.aliyun.ros.cdk.core.IResolvable environmentId) {
            this.environmentId = environmentId;
            return this;
        }

        /**
         * Sets the value of {@link RosLivyComputeProps#getFusion}
         * @param fusion the value to be set.
         * @return {@code this}
         */
        public Builder fusion(java.lang.Boolean fusion) {
            this.fusion = fusion;
            return this;
        }

        /**
         * Sets the value of {@link RosLivyComputeProps#getFusion}
         * @param fusion the value to be set.
         * @return {@code this}
         */
        public Builder fusion(com.aliyun.ros.cdk.core.IResolvable fusion) {
            this.fusion = fusion;
            return this;
        }

        /**
         * Sets the value of {@link RosLivyComputeProps#getLivyServerConf}
         * @param livyServerConf the value to be set.
         * @return {@code this}
         */
        public Builder livyServerConf(java.lang.String livyServerConf) {
            this.livyServerConf = livyServerConf;
            return this;
        }

        /**
         * Sets the value of {@link RosLivyComputeProps#getLivyServerConf}
         * @param livyServerConf the value to be set.
         * @return {@code this}
         */
        public Builder livyServerConf(com.aliyun.ros.cdk.core.IResolvable livyServerConf) {
            this.livyServerConf = livyServerConf;
            return this;
        }

        /**
         * Sets the value of {@link RosLivyComputeProps#getNetworkName}
         * @param networkName the value to be set.
         * @return {@code this}
         */
        public Builder networkName(java.lang.String networkName) {
            this.networkName = networkName;
            return this;
        }

        /**
         * Sets the value of {@link RosLivyComputeProps#getNetworkName}
         * @param networkName the value to be set.
         * @return {@code this}
         */
        public Builder networkName(com.aliyun.ros.cdk.core.IResolvable networkName) {
            this.networkName = networkName;
            return this;
        }

        /**
         * Sets the value of {@link RosLivyComputeProps#getReleaseVersion}
         * @param releaseVersion the value to be set.
         * @return {@code this}
         */
        public Builder releaseVersion(java.lang.String releaseVersion) {
            this.releaseVersion = releaseVersion;
            return this;
        }

        /**
         * Sets the value of {@link RosLivyComputeProps#getReleaseVersion}
         * @param releaseVersion the value to be set.
         * @return {@code this}
         */
        public Builder releaseVersion(com.aliyun.ros.cdk.core.IResolvable releaseVersion) {
            this.releaseVersion = releaseVersion;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosLivyComputeProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosLivyComputeProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosLivyComputeProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosLivyComputeProps {
        private final java.lang.Object authType;
        private final java.lang.Object cpuLimit;
        private final java.lang.Object displayReleaseVersion;
        private final java.lang.Object livyVersion;
        private final java.lang.Object memoryLimit;
        private final java.lang.Object name;
        private final java.lang.Object queueName;
        private final java.lang.Object workspaceBizId;
        private final java.lang.Object autoStartConfiguration;
        private final java.lang.Object autoStopConfiguration;
        private final java.lang.Object enablePublic;
        private final java.lang.Object environmentId;
        private final java.lang.Object fusion;
        private final java.lang.Object livyServerConf;
        private final java.lang.Object networkName;
        private final java.lang.Object releaseVersion;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.authType = software.amazon.jsii.Kernel.get(this, "authType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.cpuLimit = software.amazon.jsii.Kernel.get(this, "cpuLimit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.displayReleaseVersion = software.amazon.jsii.Kernel.get(this, "displayReleaseVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.livyVersion = software.amazon.jsii.Kernel.get(this, "livyVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.memoryLimit = software.amazon.jsii.Kernel.get(this, "memoryLimit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.queueName = software.amazon.jsii.Kernel.get(this, "queueName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.workspaceBizId = software.amazon.jsii.Kernel.get(this, "workspaceBizId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.autoStartConfiguration = software.amazon.jsii.Kernel.get(this, "autoStartConfiguration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.autoStopConfiguration = software.amazon.jsii.Kernel.get(this, "autoStopConfiguration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.enablePublic = software.amazon.jsii.Kernel.get(this, "enablePublic", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.environmentId = software.amazon.jsii.Kernel.get(this, "environmentId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.fusion = software.amazon.jsii.Kernel.get(this, "fusion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.livyServerConf = software.amazon.jsii.Kernel.get(this, "livyServerConf", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.networkName = software.amazon.jsii.Kernel.get(this, "networkName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.releaseVersion = software.amazon.jsii.Kernel.get(this, "releaseVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.authType = java.util.Objects.requireNonNull(builder.authType, "authType is required");
            this.cpuLimit = java.util.Objects.requireNonNull(builder.cpuLimit, "cpuLimit is required");
            this.displayReleaseVersion = java.util.Objects.requireNonNull(builder.displayReleaseVersion, "displayReleaseVersion is required");
            this.livyVersion = java.util.Objects.requireNonNull(builder.livyVersion, "livyVersion is required");
            this.memoryLimit = java.util.Objects.requireNonNull(builder.memoryLimit, "memoryLimit is required");
            this.name = java.util.Objects.requireNonNull(builder.name, "name is required");
            this.queueName = java.util.Objects.requireNonNull(builder.queueName, "queueName is required");
            this.workspaceBizId = java.util.Objects.requireNonNull(builder.workspaceBizId, "workspaceBizId is required");
            this.autoStartConfiguration = builder.autoStartConfiguration;
            this.autoStopConfiguration = builder.autoStopConfiguration;
            this.enablePublic = builder.enablePublic;
            this.environmentId = builder.environmentId;
            this.fusion = builder.fusion;
            this.livyServerConf = builder.livyServerConf;
            this.networkName = builder.networkName;
            this.releaseVersion = builder.releaseVersion;
        }

        @Override
        public final java.lang.Object getAuthType() {
            return this.authType;
        }

        @Override
        public final java.lang.Object getCpuLimit() {
            return this.cpuLimit;
        }

        @Override
        public final java.lang.Object getDisplayReleaseVersion() {
            return this.displayReleaseVersion;
        }

        @Override
        public final java.lang.Object getLivyVersion() {
            return this.livyVersion;
        }

        @Override
        public final java.lang.Object getMemoryLimit() {
            return this.memoryLimit;
        }

        @Override
        public final java.lang.Object getName() {
            return this.name;
        }

        @Override
        public final java.lang.Object getQueueName() {
            return this.queueName;
        }

        @Override
        public final java.lang.Object getWorkspaceBizId() {
            return this.workspaceBizId;
        }

        @Override
        public final java.lang.Object getAutoStartConfiguration() {
            return this.autoStartConfiguration;
        }

        @Override
        public final java.lang.Object getAutoStopConfiguration() {
            return this.autoStopConfiguration;
        }

        @Override
        public final java.lang.Object getEnablePublic() {
            return this.enablePublic;
        }

        @Override
        public final java.lang.Object getEnvironmentId() {
            return this.environmentId;
        }

        @Override
        public final java.lang.Object getFusion() {
            return this.fusion;
        }

        @Override
        public final java.lang.Object getLivyServerConf() {
            return this.livyServerConf;
        }

        @Override
        public final java.lang.Object getNetworkName() {
            return this.networkName;
        }

        @Override
        public final java.lang.Object getReleaseVersion() {
            return this.releaseVersion;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("authType", om.valueToTree(this.getAuthType()));
            data.set("cpuLimit", om.valueToTree(this.getCpuLimit()));
            data.set("displayReleaseVersion", om.valueToTree(this.getDisplayReleaseVersion()));
            data.set("livyVersion", om.valueToTree(this.getLivyVersion()));
            data.set("memoryLimit", om.valueToTree(this.getMemoryLimit()));
            data.set("name", om.valueToTree(this.getName()));
            data.set("queueName", om.valueToTree(this.getQueueName()));
            data.set("workspaceBizId", om.valueToTree(this.getWorkspaceBizId()));
            if (this.getAutoStartConfiguration() != null) {
                data.set("autoStartConfiguration", om.valueToTree(this.getAutoStartConfiguration()));
            }
            if (this.getAutoStopConfiguration() != null) {
                data.set("autoStopConfiguration", om.valueToTree(this.getAutoStopConfiguration()));
            }
            if (this.getEnablePublic() != null) {
                data.set("enablePublic", om.valueToTree(this.getEnablePublic()));
            }
            if (this.getEnvironmentId() != null) {
                data.set("environmentId", om.valueToTree(this.getEnvironmentId()));
            }
            if (this.getFusion() != null) {
                data.set("fusion", om.valueToTree(this.getFusion()));
            }
            if (this.getLivyServerConf() != null) {
                data.set("livyServerConf", om.valueToTree(this.getLivyServerConf()));
            }
            if (this.getNetworkName() != null) {
                data.set("networkName", om.valueToTree(this.getNetworkName()));
            }
            if (this.getReleaseVersion() != null) {
                data.set("releaseVersion", om.valueToTree(this.getReleaseVersion()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-emr.RosLivyComputeProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosLivyComputeProps.Jsii$Proxy that = (RosLivyComputeProps.Jsii$Proxy) o;

            if (!authType.equals(that.authType)) return false;
            if (!cpuLimit.equals(that.cpuLimit)) return false;
            if (!displayReleaseVersion.equals(that.displayReleaseVersion)) return false;
            if (!livyVersion.equals(that.livyVersion)) return false;
            if (!memoryLimit.equals(that.memoryLimit)) return false;
            if (!name.equals(that.name)) return false;
            if (!queueName.equals(that.queueName)) return false;
            if (!workspaceBizId.equals(that.workspaceBizId)) return false;
            if (this.autoStartConfiguration != null ? !this.autoStartConfiguration.equals(that.autoStartConfiguration) : that.autoStartConfiguration != null) return false;
            if (this.autoStopConfiguration != null ? !this.autoStopConfiguration.equals(that.autoStopConfiguration) : that.autoStopConfiguration != null) return false;
            if (this.enablePublic != null ? !this.enablePublic.equals(that.enablePublic) : that.enablePublic != null) return false;
            if (this.environmentId != null ? !this.environmentId.equals(that.environmentId) : that.environmentId != null) return false;
            if (this.fusion != null ? !this.fusion.equals(that.fusion) : that.fusion != null) return false;
            if (this.livyServerConf != null ? !this.livyServerConf.equals(that.livyServerConf) : that.livyServerConf != null) return false;
            if (this.networkName != null ? !this.networkName.equals(that.networkName) : that.networkName != null) return false;
            return this.releaseVersion != null ? this.releaseVersion.equals(that.releaseVersion) : that.releaseVersion == null;
        }

        @Override
        public final int hashCode() {
            int result = this.authType.hashCode();
            result = 31 * result + (this.cpuLimit.hashCode());
            result = 31 * result + (this.displayReleaseVersion.hashCode());
            result = 31 * result + (this.livyVersion.hashCode());
            result = 31 * result + (this.memoryLimit.hashCode());
            result = 31 * result + (this.name.hashCode());
            result = 31 * result + (this.queueName.hashCode());
            result = 31 * result + (this.workspaceBizId.hashCode());
            result = 31 * result + (this.autoStartConfiguration != null ? this.autoStartConfiguration.hashCode() : 0);
            result = 31 * result + (this.autoStopConfiguration != null ? this.autoStopConfiguration.hashCode() : 0);
            result = 31 * result + (this.enablePublic != null ? this.enablePublic.hashCode() : 0);
            result = 31 * result + (this.environmentId != null ? this.environmentId.hashCode() : 0);
            result = 31 * result + (this.fusion != null ? this.fusion.hashCode() : 0);
            result = 31 * result + (this.livyServerConf != null ? this.livyServerConf.hashCode() : 0);
            result = 31 * result + (this.networkName != null ? this.networkName.hashCode() : 0);
            result = 31 * result + (this.releaseVersion != null ? this.releaseVersion.hashCode() : 0);
            return result;
        }
    }
}
