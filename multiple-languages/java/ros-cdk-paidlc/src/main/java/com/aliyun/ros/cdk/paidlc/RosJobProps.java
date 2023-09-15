package com.aliyun.ros.cdk.paidlc;

/**
 * Properties for defining a <code>ALIYUN::PAIDLC::Job</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.88.0 (build eaabd08)", date = "2023-09-15T07:33:49.633Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.paidlc.$Module.class, fqn = "@alicloud/ros-cdk-paidlc.RosJobProps")
@software.amazon.jsii.Jsii.Proxy(RosJobProps.Jsii$Proxy.class)
public interface RosJobProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDisplayName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getJobSpecs();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getJobType();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getUserCommand();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getWorkspaceId();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCodeSource() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDataSources() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEnvs() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getJobMaxRunningTimeMinutes() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getOptions() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPriority() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSettings() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSuccessPolicy() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getThirdpartyLibDir() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getThirdpartyLibs() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getUserVpc() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosJobProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosJobProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosJobProps> {
        java.lang.Object displayName;
        java.lang.Object jobSpecs;
        java.lang.Object jobType;
        java.lang.Object userCommand;
        java.lang.Object workspaceId;
        java.lang.Object codeSource;
        java.lang.Object dataSources;
        java.lang.Object envs;
        java.lang.Object jobMaxRunningTimeMinutes;
        java.lang.Object options;
        java.lang.Object priority;
        java.lang.Object resourceId;
        java.lang.Object settings;
        java.lang.Object successPolicy;
        java.lang.Object thirdpartyLibDir;
        java.lang.Object thirdpartyLibs;
        java.lang.Object userVpc;

        /**
         * Sets the value of {@link RosJobProps#getDisplayName}
         * @param displayName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder displayName(java.lang.String displayName) {
            this.displayName = displayName;
            return this;
        }

        /**
         * Sets the value of {@link RosJobProps#getDisplayName}
         * @param displayName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder displayName(com.aliyun.ros.cdk.core.IResolvable displayName) {
            this.displayName = displayName;
            return this;
        }

        /**
         * Sets the value of {@link RosJobProps#getJobSpecs}
         * @param jobSpecs the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder jobSpecs(com.aliyun.ros.cdk.core.IResolvable jobSpecs) {
            this.jobSpecs = jobSpecs;
            return this;
        }

        /**
         * Sets the value of {@link RosJobProps#getJobSpecs}
         * @param jobSpecs the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder jobSpecs(java.util.List<? extends java.lang.Object> jobSpecs) {
            this.jobSpecs = jobSpecs;
            return this;
        }

        /**
         * Sets the value of {@link RosJobProps#getJobType}
         * @param jobType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder jobType(java.lang.String jobType) {
            this.jobType = jobType;
            return this;
        }

        /**
         * Sets the value of {@link RosJobProps#getJobType}
         * @param jobType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder jobType(com.aliyun.ros.cdk.core.IResolvable jobType) {
            this.jobType = jobType;
            return this;
        }

        /**
         * Sets the value of {@link RosJobProps#getUserCommand}
         * @param userCommand the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder userCommand(java.lang.String userCommand) {
            this.userCommand = userCommand;
            return this;
        }

        /**
         * Sets the value of {@link RosJobProps#getUserCommand}
         * @param userCommand the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder userCommand(com.aliyun.ros.cdk.core.IResolvable userCommand) {
            this.userCommand = userCommand;
            return this;
        }

        /**
         * Sets the value of {@link RosJobProps#getWorkspaceId}
         * @param workspaceId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder workspaceId(java.lang.String workspaceId) {
            this.workspaceId = workspaceId;
            return this;
        }

        /**
         * Sets the value of {@link RosJobProps#getWorkspaceId}
         * @param workspaceId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder workspaceId(com.aliyun.ros.cdk.core.IResolvable workspaceId) {
            this.workspaceId = workspaceId;
            return this;
        }

        /**
         * Sets the value of {@link RosJobProps#getCodeSource}
         * @param codeSource the value to be set.
         * @return {@code this}
         */
        public Builder codeSource(com.aliyun.ros.cdk.core.IResolvable codeSource) {
            this.codeSource = codeSource;
            return this;
        }

        /**
         * Sets the value of {@link RosJobProps#getCodeSource}
         * @param codeSource the value to be set.
         * @return {@code this}
         */
        public Builder codeSource(com.aliyun.ros.cdk.paidlc.RosJob.CodeSourceProperty codeSource) {
            this.codeSource = codeSource;
            return this;
        }

        /**
         * Sets the value of {@link RosJobProps#getDataSources}
         * @param dataSources the value to be set.
         * @return {@code this}
         */
        public Builder dataSources(com.aliyun.ros.cdk.core.IResolvable dataSources) {
            this.dataSources = dataSources;
            return this;
        }

        /**
         * Sets the value of {@link RosJobProps#getDataSources}
         * @param dataSources the value to be set.
         * @return {@code this}
         */
        public Builder dataSources(java.util.List<? extends java.lang.Object> dataSources) {
            this.dataSources = dataSources;
            return this;
        }

        /**
         * Sets the value of {@link RosJobProps#getEnvs}
         * @param envs the value to be set.
         * @return {@code this}
         */
        public Builder envs(java.lang.String envs) {
            this.envs = envs;
            return this;
        }

        /**
         * Sets the value of {@link RosJobProps#getEnvs}
         * @param envs the value to be set.
         * @return {@code this}
         */
        public Builder envs(com.aliyun.ros.cdk.core.IResolvable envs) {
            this.envs = envs;
            return this;
        }

        /**
         * Sets the value of {@link RosJobProps#getJobMaxRunningTimeMinutes}
         * @param jobMaxRunningTimeMinutes the value to be set.
         * @return {@code this}
         */
        public Builder jobMaxRunningTimeMinutes(java.lang.Number jobMaxRunningTimeMinutes) {
            this.jobMaxRunningTimeMinutes = jobMaxRunningTimeMinutes;
            return this;
        }

        /**
         * Sets the value of {@link RosJobProps#getJobMaxRunningTimeMinutes}
         * @param jobMaxRunningTimeMinutes the value to be set.
         * @return {@code this}
         */
        public Builder jobMaxRunningTimeMinutes(com.aliyun.ros.cdk.core.IResolvable jobMaxRunningTimeMinutes) {
            this.jobMaxRunningTimeMinutes = jobMaxRunningTimeMinutes;
            return this;
        }

        /**
         * Sets the value of {@link RosJobProps#getOptions}
         * @param options the value to be set.
         * @return {@code this}
         */
        public Builder options(java.lang.String options) {
            this.options = options;
            return this;
        }

        /**
         * Sets the value of {@link RosJobProps#getOptions}
         * @param options the value to be set.
         * @return {@code this}
         */
        public Builder options(com.aliyun.ros.cdk.core.IResolvable options) {
            this.options = options;
            return this;
        }

        /**
         * Sets the value of {@link RosJobProps#getPriority}
         * @param priority the value to be set.
         * @return {@code this}
         */
        public Builder priority(java.lang.Number priority) {
            this.priority = priority;
            return this;
        }

        /**
         * Sets the value of {@link RosJobProps#getPriority}
         * @param priority the value to be set.
         * @return {@code this}
         */
        public Builder priority(com.aliyun.ros.cdk.core.IResolvable priority) {
            this.priority = priority;
            return this;
        }

        /**
         * Sets the value of {@link RosJobProps#getResourceId}
         * @param resourceId the value to be set.
         * @return {@code this}
         */
        public Builder resourceId(java.lang.String resourceId) {
            this.resourceId = resourceId;
            return this;
        }

        /**
         * Sets the value of {@link RosJobProps#getResourceId}
         * @param resourceId the value to be set.
         * @return {@code this}
         */
        public Builder resourceId(com.aliyun.ros.cdk.core.IResolvable resourceId) {
            this.resourceId = resourceId;
            return this;
        }

        /**
         * Sets the value of {@link RosJobProps#getSettings}
         * @param settings the value to be set.
         * @return {@code this}
         */
        public Builder settings(com.aliyun.ros.cdk.core.IResolvable settings) {
            this.settings = settings;
            return this;
        }

        /**
         * Sets the value of {@link RosJobProps#getSettings}
         * @param settings the value to be set.
         * @return {@code this}
         */
        public Builder settings(java.util.Map<java.lang.String, ? extends java.lang.Object> settings) {
            this.settings = settings;
            return this;
        }

        /**
         * Sets the value of {@link RosJobProps#getSuccessPolicy}
         * @param successPolicy the value to be set.
         * @return {@code this}
         */
        public Builder successPolicy(java.lang.String successPolicy) {
            this.successPolicy = successPolicy;
            return this;
        }

        /**
         * Sets the value of {@link RosJobProps#getSuccessPolicy}
         * @param successPolicy the value to be set.
         * @return {@code this}
         */
        public Builder successPolicy(com.aliyun.ros.cdk.core.IResolvable successPolicy) {
            this.successPolicy = successPolicy;
            return this;
        }

        /**
         * Sets the value of {@link RosJobProps#getThirdpartyLibDir}
         * @param thirdpartyLibDir the value to be set.
         * @return {@code this}
         */
        public Builder thirdpartyLibDir(java.lang.String thirdpartyLibDir) {
            this.thirdpartyLibDir = thirdpartyLibDir;
            return this;
        }

        /**
         * Sets the value of {@link RosJobProps#getThirdpartyLibDir}
         * @param thirdpartyLibDir the value to be set.
         * @return {@code this}
         */
        public Builder thirdpartyLibDir(com.aliyun.ros.cdk.core.IResolvable thirdpartyLibDir) {
            this.thirdpartyLibDir = thirdpartyLibDir;
            return this;
        }

        /**
         * Sets the value of {@link RosJobProps#getThirdpartyLibs}
         * @param thirdpartyLibs the value to be set.
         * @return {@code this}
         */
        public Builder thirdpartyLibs(com.aliyun.ros.cdk.core.IResolvable thirdpartyLibs) {
            this.thirdpartyLibs = thirdpartyLibs;
            return this;
        }

        /**
         * Sets the value of {@link RosJobProps#getThirdpartyLibs}
         * @param thirdpartyLibs the value to be set.
         * @return {@code this}
         */
        public Builder thirdpartyLibs(java.util.List<? extends java.lang.Object> thirdpartyLibs) {
            this.thirdpartyLibs = thirdpartyLibs;
            return this;
        }

        /**
         * Sets the value of {@link RosJobProps#getUserVpc}
         * @param userVpc the value to be set.
         * @return {@code this}
         */
        public Builder userVpc(com.aliyun.ros.cdk.core.IResolvable userVpc) {
            this.userVpc = userVpc;
            return this;
        }

        /**
         * Sets the value of {@link RosJobProps#getUserVpc}
         * @param userVpc the value to be set.
         * @return {@code this}
         */
        public Builder userVpc(com.aliyun.ros.cdk.paidlc.RosJob.UserVpcProperty userVpc) {
            this.userVpc = userVpc;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosJobProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosJobProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosJobProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosJobProps {
        private final java.lang.Object displayName;
        private final java.lang.Object jobSpecs;
        private final java.lang.Object jobType;
        private final java.lang.Object userCommand;
        private final java.lang.Object workspaceId;
        private final java.lang.Object codeSource;
        private final java.lang.Object dataSources;
        private final java.lang.Object envs;
        private final java.lang.Object jobMaxRunningTimeMinutes;
        private final java.lang.Object options;
        private final java.lang.Object priority;
        private final java.lang.Object resourceId;
        private final java.lang.Object settings;
        private final java.lang.Object successPolicy;
        private final java.lang.Object thirdpartyLibDir;
        private final java.lang.Object thirdpartyLibs;
        private final java.lang.Object userVpc;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.displayName = software.amazon.jsii.Kernel.get(this, "displayName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.jobSpecs = software.amazon.jsii.Kernel.get(this, "jobSpecs", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.jobType = software.amazon.jsii.Kernel.get(this, "jobType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.userCommand = software.amazon.jsii.Kernel.get(this, "userCommand", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.workspaceId = software.amazon.jsii.Kernel.get(this, "workspaceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.codeSource = software.amazon.jsii.Kernel.get(this, "codeSource", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dataSources = software.amazon.jsii.Kernel.get(this, "dataSources", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.envs = software.amazon.jsii.Kernel.get(this, "envs", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.jobMaxRunningTimeMinutes = software.amazon.jsii.Kernel.get(this, "jobMaxRunningTimeMinutes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.options = software.amazon.jsii.Kernel.get(this, "options", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.priority = software.amazon.jsii.Kernel.get(this, "priority", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceId = software.amazon.jsii.Kernel.get(this, "resourceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.settings = software.amazon.jsii.Kernel.get(this, "settings", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.successPolicy = software.amazon.jsii.Kernel.get(this, "successPolicy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.thirdpartyLibDir = software.amazon.jsii.Kernel.get(this, "thirdpartyLibDir", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.thirdpartyLibs = software.amazon.jsii.Kernel.get(this, "thirdpartyLibs", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.userVpc = software.amazon.jsii.Kernel.get(this, "userVpc", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.displayName = java.util.Objects.requireNonNull(builder.displayName, "displayName is required");
            this.jobSpecs = java.util.Objects.requireNonNull(builder.jobSpecs, "jobSpecs is required");
            this.jobType = java.util.Objects.requireNonNull(builder.jobType, "jobType is required");
            this.userCommand = java.util.Objects.requireNonNull(builder.userCommand, "userCommand is required");
            this.workspaceId = java.util.Objects.requireNonNull(builder.workspaceId, "workspaceId is required");
            this.codeSource = builder.codeSource;
            this.dataSources = builder.dataSources;
            this.envs = builder.envs;
            this.jobMaxRunningTimeMinutes = builder.jobMaxRunningTimeMinutes;
            this.options = builder.options;
            this.priority = builder.priority;
            this.resourceId = builder.resourceId;
            this.settings = builder.settings;
            this.successPolicy = builder.successPolicy;
            this.thirdpartyLibDir = builder.thirdpartyLibDir;
            this.thirdpartyLibs = builder.thirdpartyLibs;
            this.userVpc = builder.userVpc;
        }

        @Override
        public final java.lang.Object getDisplayName() {
            return this.displayName;
        }

        @Override
        public final java.lang.Object getJobSpecs() {
            return this.jobSpecs;
        }

        @Override
        public final java.lang.Object getJobType() {
            return this.jobType;
        }

        @Override
        public final java.lang.Object getUserCommand() {
            return this.userCommand;
        }

        @Override
        public final java.lang.Object getWorkspaceId() {
            return this.workspaceId;
        }

        @Override
        public final java.lang.Object getCodeSource() {
            return this.codeSource;
        }

        @Override
        public final java.lang.Object getDataSources() {
            return this.dataSources;
        }

        @Override
        public final java.lang.Object getEnvs() {
            return this.envs;
        }

        @Override
        public final java.lang.Object getJobMaxRunningTimeMinutes() {
            return this.jobMaxRunningTimeMinutes;
        }

        @Override
        public final java.lang.Object getOptions() {
            return this.options;
        }

        @Override
        public final java.lang.Object getPriority() {
            return this.priority;
        }

        @Override
        public final java.lang.Object getResourceId() {
            return this.resourceId;
        }

        @Override
        public final java.lang.Object getSettings() {
            return this.settings;
        }

        @Override
        public final java.lang.Object getSuccessPolicy() {
            return this.successPolicy;
        }

        @Override
        public final java.lang.Object getThirdpartyLibDir() {
            return this.thirdpartyLibDir;
        }

        @Override
        public final java.lang.Object getThirdpartyLibs() {
            return this.thirdpartyLibs;
        }

        @Override
        public final java.lang.Object getUserVpc() {
            return this.userVpc;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("displayName", om.valueToTree(this.getDisplayName()));
            data.set("jobSpecs", om.valueToTree(this.getJobSpecs()));
            data.set("jobType", om.valueToTree(this.getJobType()));
            data.set("userCommand", om.valueToTree(this.getUserCommand()));
            data.set("workspaceId", om.valueToTree(this.getWorkspaceId()));
            if (this.getCodeSource() != null) {
                data.set("codeSource", om.valueToTree(this.getCodeSource()));
            }
            if (this.getDataSources() != null) {
                data.set("dataSources", om.valueToTree(this.getDataSources()));
            }
            if (this.getEnvs() != null) {
                data.set("envs", om.valueToTree(this.getEnvs()));
            }
            if (this.getJobMaxRunningTimeMinutes() != null) {
                data.set("jobMaxRunningTimeMinutes", om.valueToTree(this.getJobMaxRunningTimeMinutes()));
            }
            if (this.getOptions() != null) {
                data.set("options", om.valueToTree(this.getOptions()));
            }
            if (this.getPriority() != null) {
                data.set("priority", om.valueToTree(this.getPriority()));
            }
            if (this.getResourceId() != null) {
                data.set("resourceId", om.valueToTree(this.getResourceId()));
            }
            if (this.getSettings() != null) {
                data.set("settings", om.valueToTree(this.getSettings()));
            }
            if (this.getSuccessPolicy() != null) {
                data.set("successPolicy", om.valueToTree(this.getSuccessPolicy()));
            }
            if (this.getThirdpartyLibDir() != null) {
                data.set("thirdpartyLibDir", om.valueToTree(this.getThirdpartyLibDir()));
            }
            if (this.getThirdpartyLibs() != null) {
                data.set("thirdpartyLibs", om.valueToTree(this.getThirdpartyLibs()));
            }
            if (this.getUserVpc() != null) {
                data.set("userVpc", om.valueToTree(this.getUserVpc()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-paidlc.RosJobProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosJobProps.Jsii$Proxy that = (RosJobProps.Jsii$Proxy) o;

            if (!displayName.equals(that.displayName)) return false;
            if (!jobSpecs.equals(that.jobSpecs)) return false;
            if (!jobType.equals(that.jobType)) return false;
            if (!userCommand.equals(that.userCommand)) return false;
            if (!workspaceId.equals(that.workspaceId)) return false;
            if (this.codeSource != null ? !this.codeSource.equals(that.codeSource) : that.codeSource != null) return false;
            if (this.dataSources != null ? !this.dataSources.equals(that.dataSources) : that.dataSources != null) return false;
            if (this.envs != null ? !this.envs.equals(that.envs) : that.envs != null) return false;
            if (this.jobMaxRunningTimeMinutes != null ? !this.jobMaxRunningTimeMinutes.equals(that.jobMaxRunningTimeMinutes) : that.jobMaxRunningTimeMinutes != null) return false;
            if (this.options != null ? !this.options.equals(that.options) : that.options != null) return false;
            if (this.priority != null ? !this.priority.equals(that.priority) : that.priority != null) return false;
            if (this.resourceId != null ? !this.resourceId.equals(that.resourceId) : that.resourceId != null) return false;
            if (this.settings != null ? !this.settings.equals(that.settings) : that.settings != null) return false;
            if (this.successPolicy != null ? !this.successPolicy.equals(that.successPolicy) : that.successPolicy != null) return false;
            if (this.thirdpartyLibDir != null ? !this.thirdpartyLibDir.equals(that.thirdpartyLibDir) : that.thirdpartyLibDir != null) return false;
            if (this.thirdpartyLibs != null ? !this.thirdpartyLibs.equals(that.thirdpartyLibs) : that.thirdpartyLibs != null) return false;
            return this.userVpc != null ? this.userVpc.equals(that.userVpc) : that.userVpc == null;
        }

        @Override
        public final int hashCode() {
            int result = this.displayName.hashCode();
            result = 31 * result + (this.jobSpecs.hashCode());
            result = 31 * result + (this.jobType.hashCode());
            result = 31 * result + (this.userCommand.hashCode());
            result = 31 * result + (this.workspaceId.hashCode());
            result = 31 * result + (this.codeSource != null ? this.codeSource.hashCode() : 0);
            result = 31 * result + (this.dataSources != null ? this.dataSources.hashCode() : 0);
            result = 31 * result + (this.envs != null ? this.envs.hashCode() : 0);
            result = 31 * result + (this.jobMaxRunningTimeMinutes != null ? this.jobMaxRunningTimeMinutes.hashCode() : 0);
            result = 31 * result + (this.options != null ? this.options.hashCode() : 0);
            result = 31 * result + (this.priority != null ? this.priority.hashCode() : 0);
            result = 31 * result + (this.resourceId != null ? this.resourceId.hashCode() : 0);
            result = 31 * result + (this.settings != null ? this.settings.hashCode() : 0);
            result = 31 * result + (this.successPolicy != null ? this.successPolicy.hashCode() : 0);
            result = 31 * result + (this.thirdpartyLibDir != null ? this.thirdpartyLibDir.hashCode() : 0);
            result = 31 * result + (this.thirdpartyLibs != null ? this.thirdpartyLibs.hashCode() : 0);
            result = 31 * result + (this.userVpc != null ? this.userVpc.hashCode() : 0);
            return result;
        }
    }
}
