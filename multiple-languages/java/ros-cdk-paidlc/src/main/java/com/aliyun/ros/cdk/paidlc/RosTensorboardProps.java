package com.aliyun.ros.cdk.paidlc;

/**
 * Properties for defining a <code>RosTensorboard</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-paidlc-tensorboard
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:08.811Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.paidlc.$Module.class, fqn = "@alicloud/ros-cdk-paidlc.RosTensorboardProps")
@software.amazon.jsii.Jsii.Proxy(RosTensorboardProps.Jsii$Proxy.class)
public interface RosTensorboardProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDataSourceId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDisplayName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getWorkspaceId();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCpu() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDataSources() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDataSourceType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getJobId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMaxRunningTimeMinutes() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMemory() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getOptions() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSourceId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSourceType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSummaryPath() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSummaryRelativePath() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getUri() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosTensorboardProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosTensorboardProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosTensorboardProps> {
        java.lang.Object dataSourceId;
        java.lang.Object displayName;
        java.lang.Object workspaceId;
        java.lang.Object cpu;
        java.lang.Object dataSources;
        java.lang.Object dataSourceType;
        java.lang.Object jobId;
        java.lang.Object maxRunningTimeMinutes;
        java.lang.Object memory;
        java.lang.Object options;
        java.lang.Object sourceId;
        java.lang.Object sourceType;
        java.lang.Object summaryPath;
        java.lang.Object summaryRelativePath;
        java.lang.Object uri;

        /**
         * Sets the value of {@link RosTensorboardProps#getDataSourceId}
         * @param dataSourceId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder dataSourceId(java.lang.String dataSourceId) {
            this.dataSourceId = dataSourceId;
            return this;
        }

        /**
         * Sets the value of {@link RosTensorboardProps#getDataSourceId}
         * @param dataSourceId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder dataSourceId(com.aliyun.ros.cdk.core.IResolvable dataSourceId) {
            this.dataSourceId = dataSourceId;
            return this;
        }

        /**
         * Sets the value of {@link RosTensorboardProps#getDisplayName}
         * @param displayName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder displayName(java.lang.String displayName) {
            this.displayName = displayName;
            return this;
        }

        /**
         * Sets the value of {@link RosTensorboardProps#getDisplayName}
         * @param displayName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder displayName(com.aliyun.ros.cdk.core.IResolvable displayName) {
            this.displayName = displayName;
            return this;
        }

        /**
         * Sets the value of {@link RosTensorboardProps#getWorkspaceId}
         * @param workspaceId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder workspaceId(java.lang.String workspaceId) {
            this.workspaceId = workspaceId;
            return this;
        }

        /**
         * Sets the value of {@link RosTensorboardProps#getWorkspaceId}
         * @param workspaceId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder workspaceId(com.aliyun.ros.cdk.core.IResolvable workspaceId) {
            this.workspaceId = workspaceId;
            return this;
        }

        /**
         * Sets the value of {@link RosTensorboardProps#getCpu}
         * @param cpu the value to be set.
         * @return {@code this}
         */
        public Builder cpu(java.lang.Number cpu) {
            this.cpu = cpu;
            return this;
        }

        /**
         * Sets the value of {@link RosTensorboardProps#getCpu}
         * @param cpu the value to be set.
         * @return {@code this}
         */
        public Builder cpu(com.aliyun.ros.cdk.core.IResolvable cpu) {
            this.cpu = cpu;
            return this;
        }

        /**
         * Sets the value of {@link RosTensorboardProps#getDataSources}
         * @param dataSources the value to be set.
         * @return {@code this}
         */
        public Builder dataSources(java.util.List<? extends java.lang.Object> dataSources) {
            this.dataSources = dataSources;
            return this;
        }

        /**
         * Sets the value of {@link RosTensorboardProps#getDataSources}
         * @param dataSources the value to be set.
         * @return {@code this}
         */
        public Builder dataSources(com.aliyun.ros.cdk.core.IResolvable dataSources) {
            this.dataSources = dataSources;
            return this;
        }

        /**
         * Sets the value of {@link RosTensorboardProps#getDataSourceType}
         * @param dataSourceType the value to be set.
         * @return {@code this}
         */
        public Builder dataSourceType(java.lang.String dataSourceType) {
            this.dataSourceType = dataSourceType;
            return this;
        }

        /**
         * Sets the value of {@link RosTensorboardProps#getDataSourceType}
         * @param dataSourceType the value to be set.
         * @return {@code this}
         */
        public Builder dataSourceType(com.aliyun.ros.cdk.core.IResolvable dataSourceType) {
            this.dataSourceType = dataSourceType;
            return this;
        }

        /**
         * Sets the value of {@link RosTensorboardProps#getJobId}
         * @param jobId the value to be set.
         * @return {@code this}
         */
        public Builder jobId(java.lang.String jobId) {
            this.jobId = jobId;
            return this;
        }

        /**
         * Sets the value of {@link RosTensorboardProps#getJobId}
         * @param jobId the value to be set.
         * @return {@code this}
         */
        public Builder jobId(com.aliyun.ros.cdk.core.IResolvable jobId) {
            this.jobId = jobId;
            return this;
        }

        /**
         * Sets the value of {@link RosTensorboardProps#getMaxRunningTimeMinutes}
         * @param maxRunningTimeMinutes the value to be set.
         * @return {@code this}
         */
        public Builder maxRunningTimeMinutes(java.lang.Number maxRunningTimeMinutes) {
            this.maxRunningTimeMinutes = maxRunningTimeMinutes;
            return this;
        }

        /**
         * Sets the value of {@link RosTensorboardProps#getMaxRunningTimeMinutes}
         * @param maxRunningTimeMinutes the value to be set.
         * @return {@code this}
         */
        public Builder maxRunningTimeMinutes(com.aliyun.ros.cdk.core.IResolvable maxRunningTimeMinutes) {
            this.maxRunningTimeMinutes = maxRunningTimeMinutes;
            return this;
        }

        /**
         * Sets the value of {@link RosTensorboardProps#getMemory}
         * @param memory the value to be set.
         * @return {@code this}
         */
        public Builder memory(java.lang.Number memory) {
            this.memory = memory;
            return this;
        }

        /**
         * Sets the value of {@link RosTensorboardProps#getMemory}
         * @param memory the value to be set.
         * @return {@code this}
         */
        public Builder memory(com.aliyun.ros.cdk.core.IResolvable memory) {
            this.memory = memory;
            return this;
        }

        /**
         * Sets the value of {@link RosTensorboardProps#getOptions}
         * @param options the value to be set.
         * @return {@code this}
         */
        public Builder options(java.lang.String options) {
            this.options = options;
            return this;
        }

        /**
         * Sets the value of {@link RosTensorboardProps#getOptions}
         * @param options the value to be set.
         * @return {@code this}
         */
        public Builder options(com.aliyun.ros.cdk.core.IResolvable options) {
            this.options = options;
            return this;
        }

        /**
         * Sets the value of {@link RosTensorboardProps#getSourceId}
         * @param sourceId the value to be set.
         * @return {@code this}
         */
        public Builder sourceId(java.lang.String sourceId) {
            this.sourceId = sourceId;
            return this;
        }

        /**
         * Sets the value of {@link RosTensorboardProps#getSourceId}
         * @param sourceId the value to be set.
         * @return {@code this}
         */
        public Builder sourceId(com.aliyun.ros.cdk.core.IResolvable sourceId) {
            this.sourceId = sourceId;
            return this;
        }

        /**
         * Sets the value of {@link RosTensorboardProps#getSourceType}
         * @param sourceType the value to be set.
         * @return {@code this}
         */
        public Builder sourceType(java.lang.String sourceType) {
            this.sourceType = sourceType;
            return this;
        }

        /**
         * Sets the value of {@link RosTensorboardProps#getSourceType}
         * @param sourceType the value to be set.
         * @return {@code this}
         */
        public Builder sourceType(com.aliyun.ros.cdk.core.IResolvable sourceType) {
            this.sourceType = sourceType;
            return this;
        }

        /**
         * Sets the value of {@link RosTensorboardProps#getSummaryPath}
         * @param summaryPath the value to be set.
         * @return {@code this}
         */
        public Builder summaryPath(java.lang.String summaryPath) {
            this.summaryPath = summaryPath;
            return this;
        }

        /**
         * Sets the value of {@link RosTensorboardProps#getSummaryPath}
         * @param summaryPath the value to be set.
         * @return {@code this}
         */
        public Builder summaryPath(com.aliyun.ros.cdk.core.IResolvable summaryPath) {
            this.summaryPath = summaryPath;
            return this;
        }

        /**
         * Sets the value of {@link RosTensorboardProps#getSummaryRelativePath}
         * @param summaryRelativePath the value to be set.
         * @return {@code this}
         */
        public Builder summaryRelativePath(java.lang.String summaryRelativePath) {
            this.summaryRelativePath = summaryRelativePath;
            return this;
        }

        /**
         * Sets the value of {@link RosTensorboardProps#getSummaryRelativePath}
         * @param summaryRelativePath the value to be set.
         * @return {@code this}
         */
        public Builder summaryRelativePath(com.aliyun.ros.cdk.core.IResolvable summaryRelativePath) {
            this.summaryRelativePath = summaryRelativePath;
            return this;
        }

        /**
         * Sets the value of {@link RosTensorboardProps#getUri}
         * @param uri the value to be set.
         * @return {@code this}
         */
        public Builder uri(java.lang.String uri) {
            this.uri = uri;
            return this;
        }

        /**
         * Sets the value of {@link RosTensorboardProps#getUri}
         * @param uri the value to be set.
         * @return {@code this}
         */
        public Builder uri(com.aliyun.ros.cdk.core.IResolvable uri) {
            this.uri = uri;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosTensorboardProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosTensorboardProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosTensorboardProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosTensorboardProps {
        private final java.lang.Object dataSourceId;
        private final java.lang.Object displayName;
        private final java.lang.Object workspaceId;
        private final java.lang.Object cpu;
        private final java.lang.Object dataSources;
        private final java.lang.Object dataSourceType;
        private final java.lang.Object jobId;
        private final java.lang.Object maxRunningTimeMinutes;
        private final java.lang.Object memory;
        private final java.lang.Object options;
        private final java.lang.Object sourceId;
        private final java.lang.Object sourceType;
        private final java.lang.Object summaryPath;
        private final java.lang.Object summaryRelativePath;
        private final java.lang.Object uri;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.dataSourceId = software.amazon.jsii.Kernel.get(this, "dataSourceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.displayName = software.amazon.jsii.Kernel.get(this, "displayName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.workspaceId = software.amazon.jsii.Kernel.get(this, "workspaceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.cpu = software.amazon.jsii.Kernel.get(this, "cpu", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dataSources = software.amazon.jsii.Kernel.get(this, "dataSources", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dataSourceType = software.amazon.jsii.Kernel.get(this, "dataSourceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.jobId = software.amazon.jsii.Kernel.get(this, "jobId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.maxRunningTimeMinutes = software.amazon.jsii.Kernel.get(this, "maxRunningTimeMinutes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.memory = software.amazon.jsii.Kernel.get(this, "memory", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.options = software.amazon.jsii.Kernel.get(this, "options", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.sourceId = software.amazon.jsii.Kernel.get(this, "sourceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.sourceType = software.amazon.jsii.Kernel.get(this, "sourceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.summaryPath = software.amazon.jsii.Kernel.get(this, "summaryPath", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.summaryRelativePath = software.amazon.jsii.Kernel.get(this, "summaryRelativePath", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.uri = software.amazon.jsii.Kernel.get(this, "uri", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.dataSourceId = java.util.Objects.requireNonNull(builder.dataSourceId, "dataSourceId is required");
            this.displayName = java.util.Objects.requireNonNull(builder.displayName, "displayName is required");
            this.workspaceId = java.util.Objects.requireNonNull(builder.workspaceId, "workspaceId is required");
            this.cpu = builder.cpu;
            this.dataSources = builder.dataSources;
            this.dataSourceType = builder.dataSourceType;
            this.jobId = builder.jobId;
            this.maxRunningTimeMinutes = builder.maxRunningTimeMinutes;
            this.memory = builder.memory;
            this.options = builder.options;
            this.sourceId = builder.sourceId;
            this.sourceType = builder.sourceType;
            this.summaryPath = builder.summaryPath;
            this.summaryRelativePath = builder.summaryRelativePath;
            this.uri = builder.uri;
        }

        @Override
        public final java.lang.Object getDataSourceId() {
            return this.dataSourceId;
        }

        @Override
        public final java.lang.Object getDisplayName() {
            return this.displayName;
        }

        @Override
        public final java.lang.Object getWorkspaceId() {
            return this.workspaceId;
        }

        @Override
        public final java.lang.Object getCpu() {
            return this.cpu;
        }

        @Override
        public final java.lang.Object getDataSources() {
            return this.dataSources;
        }

        @Override
        public final java.lang.Object getDataSourceType() {
            return this.dataSourceType;
        }

        @Override
        public final java.lang.Object getJobId() {
            return this.jobId;
        }

        @Override
        public final java.lang.Object getMaxRunningTimeMinutes() {
            return this.maxRunningTimeMinutes;
        }

        @Override
        public final java.lang.Object getMemory() {
            return this.memory;
        }

        @Override
        public final java.lang.Object getOptions() {
            return this.options;
        }

        @Override
        public final java.lang.Object getSourceId() {
            return this.sourceId;
        }

        @Override
        public final java.lang.Object getSourceType() {
            return this.sourceType;
        }

        @Override
        public final java.lang.Object getSummaryPath() {
            return this.summaryPath;
        }

        @Override
        public final java.lang.Object getSummaryRelativePath() {
            return this.summaryRelativePath;
        }

        @Override
        public final java.lang.Object getUri() {
            return this.uri;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("dataSourceId", om.valueToTree(this.getDataSourceId()));
            data.set("displayName", om.valueToTree(this.getDisplayName()));
            data.set("workspaceId", om.valueToTree(this.getWorkspaceId()));
            if (this.getCpu() != null) {
                data.set("cpu", om.valueToTree(this.getCpu()));
            }
            if (this.getDataSources() != null) {
                data.set("dataSources", om.valueToTree(this.getDataSources()));
            }
            if (this.getDataSourceType() != null) {
                data.set("dataSourceType", om.valueToTree(this.getDataSourceType()));
            }
            if (this.getJobId() != null) {
                data.set("jobId", om.valueToTree(this.getJobId()));
            }
            if (this.getMaxRunningTimeMinutes() != null) {
                data.set("maxRunningTimeMinutes", om.valueToTree(this.getMaxRunningTimeMinutes()));
            }
            if (this.getMemory() != null) {
                data.set("memory", om.valueToTree(this.getMemory()));
            }
            if (this.getOptions() != null) {
                data.set("options", om.valueToTree(this.getOptions()));
            }
            if (this.getSourceId() != null) {
                data.set("sourceId", om.valueToTree(this.getSourceId()));
            }
            if (this.getSourceType() != null) {
                data.set("sourceType", om.valueToTree(this.getSourceType()));
            }
            if (this.getSummaryPath() != null) {
                data.set("summaryPath", om.valueToTree(this.getSummaryPath()));
            }
            if (this.getSummaryRelativePath() != null) {
                data.set("summaryRelativePath", om.valueToTree(this.getSummaryRelativePath()));
            }
            if (this.getUri() != null) {
                data.set("uri", om.valueToTree(this.getUri()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-paidlc.RosTensorboardProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosTensorboardProps.Jsii$Proxy that = (RosTensorboardProps.Jsii$Proxy) o;

            if (!dataSourceId.equals(that.dataSourceId)) return false;
            if (!displayName.equals(that.displayName)) return false;
            if (!workspaceId.equals(that.workspaceId)) return false;
            if (this.cpu != null ? !this.cpu.equals(that.cpu) : that.cpu != null) return false;
            if (this.dataSources != null ? !this.dataSources.equals(that.dataSources) : that.dataSources != null) return false;
            if (this.dataSourceType != null ? !this.dataSourceType.equals(that.dataSourceType) : that.dataSourceType != null) return false;
            if (this.jobId != null ? !this.jobId.equals(that.jobId) : that.jobId != null) return false;
            if (this.maxRunningTimeMinutes != null ? !this.maxRunningTimeMinutes.equals(that.maxRunningTimeMinutes) : that.maxRunningTimeMinutes != null) return false;
            if (this.memory != null ? !this.memory.equals(that.memory) : that.memory != null) return false;
            if (this.options != null ? !this.options.equals(that.options) : that.options != null) return false;
            if (this.sourceId != null ? !this.sourceId.equals(that.sourceId) : that.sourceId != null) return false;
            if (this.sourceType != null ? !this.sourceType.equals(that.sourceType) : that.sourceType != null) return false;
            if (this.summaryPath != null ? !this.summaryPath.equals(that.summaryPath) : that.summaryPath != null) return false;
            if (this.summaryRelativePath != null ? !this.summaryRelativePath.equals(that.summaryRelativePath) : that.summaryRelativePath != null) return false;
            return this.uri != null ? this.uri.equals(that.uri) : that.uri == null;
        }

        @Override
        public final int hashCode() {
            int result = this.dataSourceId.hashCode();
            result = 31 * result + (this.displayName.hashCode());
            result = 31 * result + (this.workspaceId.hashCode());
            result = 31 * result + (this.cpu != null ? this.cpu.hashCode() : 0);
            result = 31 * result + (this.dataSources != null ? this.dataSources.hashCode() : 0);
            result = 31 * result + (this.dataSourceType != null ? this.dataSourceType.hashCode() : 0);
            result = 31 * result + (this.jobId != null ? this.jobId.hashCode() : 0);
            result = 31 * result + (this.maxRunningTimeMinutes != null ? this.maxRunningTimeMinutes.hashCode() : 0);
            result = 31 * result + (this.memory != null ? this.memory.hashCode() : 0);
            result = 31 * result + (this.options != null ? this.options.hashCode() : 0);
            result = 31 * result + (this.sourceId != null ? this.sourceId.hashCode() : 0);
            result = 31 * result + (this.sourceType != null ? this.sourceType.hashCode() : 0);
            result = 31 * result + (this.summaryPath != null ? this.summaryPath.hashCode() : 0);
            result = 31 * result + (this.summaryRelativePath != null ? this.summaryRelativePath.hashCode() : 0);
            result = 31 * result + (this.uri != null ? this.uri.hashCode() : 0);
            return result;
        }
    }
}
