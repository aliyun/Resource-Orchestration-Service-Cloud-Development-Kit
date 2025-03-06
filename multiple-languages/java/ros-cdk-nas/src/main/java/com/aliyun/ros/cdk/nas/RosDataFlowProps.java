package com.aliyun.ros.cdk.nas;

/**
 * Properties for defining a <code>RosDataFlow</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nas-dataflow
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:08.240Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.nas.$Module.class, fqn = "@alicloud/ros-cdk-nas.RosDataFlowProps")
@software.amazon.jsii.Jsii.Proxy(RosDataFlowProps.Jsii$Proxy.class)
public interface RosDataFlowProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getFileSystemId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getFsetId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSourceStorage();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getThroughput();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAutoRefreshInterval() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAutoRefreshPolicy() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAutoRefreshs() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSourceSecurityType() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosDataFlowProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosDataFlowProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosDataFlowProps> {
        java.lang.Object fileSystemId;
        java.lang.Object fsetId;
        java.lang.Object sourceStorage;
        java.lang.Object throughput;
        java.lang.Object autoRefreshInterval;
        java.lang.Object autoRefreshPolicy;
        java.lang.Object autoRefreshs;
        java.lang.Object description;
        java.lang.Object sourceSecurityType;

        /**
         * Sets the value of {@link RosDataFlowProps#getFileSystemId}
         * @param fileSystemId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder fileSystemId(java.lang.String fileSystemId) {
            this.fileSystemId = fileSystemId;
            return this;
        }

        /**
         * Sets the value of {@link RosDataFlowProps#getFileSystemId}
         * @param fileSystemId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder fileSystemId(com.aliyun.ros.cdk.core.IResolvable fileSystemId) {
            this.fileSystemId = fileSystemId;
            return this;
        }

        /**
         * Sets the value of {@link RosDataFlowProps#getFsetId}
         * @param fsetId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder fsetId(java.lang.String fsetId) {
            this.fsetId = fsetId;
            return this;
        }

        /**
         * Sets the value of {@link RosDataFlowProps#getFsetId}
         * @param fsetId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder fsetId(com.aliyun.ros.cdk.core.IResolvable fsetId) {
            this.fsetId = fsetId;
            return this;
        }

        /**
         * Sets the value of {@link RosDataFlowProps#getSourceStorage}
         * @param sourceStorage the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder sourceStorage(java.lang.String sourceStorage) {
            this.sourceStorage = sourceStorage;
            return this;
        }

        /**
         * Sets the value of {@link RosDataFlowProps#getSourceStorage}
         * @param sourceStorage the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder sourceStorage(com.aliyun.ros.cdk.core.IResolvable sourceStorage) {
            this.sourceStorage = sourceStorage;
            return this;
        }

        /**
         * Sets the value of {@link RosDataFlowProps#getThroughput}
         * @param throughput the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder throughput(java.lang.Number throughput) {
            this.throughput = throughput;
            return this;
        }

        /**
         * Sets the value of {@link RosDataFlowProps#getThroughput}
         * @param throughput the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder throughput(com.aliyun.ros.cdk.core.IResolvable throughput) {
            this.throughput = throughput;
            return this;
        }

        /**
         * Sets the value of {@link RosDataFlowProps#getAutoRefreshInterval}
         * @param autoRefreshInterval the value to be set.
         * @return {@code this}
         */
        public Builder autoRefreshInterval(java.lang.Number autoRefreshInterval) {
            this.autoRefreshInterval = autoRefreshInterval;
            return this;
        }

        /**
         * Sets the value of {@link RosDataFlowProps#getAutoRefreshInterval}
         * @param autoRefreshInterval the value to be set.
         * @return {@code this}
         */
        public Builder autoRefreshInterval(com.aliyun.ros.cdk.core.IResolvable autoRefreshInterval) {
            this.autoRefreshInterval = autoRefreshInterval;
            return this;
        }

        /**
         * Sets the value of {@link RosDataFlowProps#getAutoRefreshPolicy}
         * @param autoRefreshPolicy the value to be set.
         * @return {@code this}
         */
        public Builder autoRefreshPolicy(java.lang.String autoRefreshPolicy) {
            this.autoRefreshPolicy = autoRefreshPolicy;
            return this;
        }

        /**
         * Sets the value of {@link RosDataFlowProps#getAutoRefreshPolicy}
         * @param autoRefreshPolicy the value to be set.
         * @return {@code this}
         */
        public Builder autoRefreshPolicy(com.aliyun.ros.cdk.core.IResolvable autoRefreshPolicy) {
            this.autoRefreshPolicy = autoRefreshPolicy;
            return this;
        }

        /**
         * Sets the value of {@link RosDataFlowProps#getAutoRefreshs}
         * @param autoRefreshs the value to be set.
         * @return {@code this}
         */
        public Builder autoRefreshs(com.aliyun.ros.cdk.core.IResolvable autoRefreshs) {
            this.autoRefreshs = autoRefreshs;
            return this;
        }

        /**
         * Sets the value of {@link RosDataFlowProps#getAutoRefreshs}
         * @param autoRefreshs the value to be set.
         * @return {@code this}
         */
        public Builder autoRefreshs(java.util.List<? extends java.lang.Object> autoRefreshs) {
            this.autoRefreshs = autoRefreshs;
            return this;
        }

        /**
         * Sets the value of {@link RosDataFlowProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosDataFlowProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosDataFlowProps#getSourceSecurityType}
         * @param sourceSecurityType the value to be set.
         * @return {@code this}
         */
        public Builder sourceSecurityType(java.lang.String sourceSecurityType) {
            this.sourceSecurityType = sourceSecurityType;
            return this;
        }

        /**
         * Sets the value of {@link RosDataFlowProps#getSourceSecurityType}
         * @param sourceSecurityType the value to be set.
         * @return {@code this}
         */
        public Builder sourceSecurityType(com.aliyun.ros.cdk.core.IResolvable sourceSecurityType) {
            this.sourceSecurityType = sourceSecurityType;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosDataFlowProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosDataFlowProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosDataFlowProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosDataFlowProps {
        private final java.lang.Object fileSystemId;
        private final java.lang.Object fsetId;
        private final java.lang.Object sourceStorage;
        private final java.lang.Object throughput;
        private final java.lang.Object autoRefreshInterval;
        private final java.lang.Object autoRefreshPolicy;
        private final java.lang.Object autoRefreshs;
        private final java.lang.Object description;
        private final java.lang.Object sourceSecurityType;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.fileSystemId = software.amazon.jsii.Kernel.get(this, "fileSystemId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.fsetId = software.amazon.jsii.Kernel.get(this, "fsetId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.sourceStorage = software.amazon.jsii.Kernel.get(this, "sourceStorage", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.throughput = software.amazon.jsii.Kernel.get(this, "throughput", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.autoRefreshInterval = software.amazon.jsii.Kernel.get(this, "autoRefreshInterval", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.autoRefreshPolicy = software.amazon.jsii.Kernel.get(this, "autoRefreshPolicy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.autoRefreshs = software.amazon.jsii.Kernel.get(this, "autoRefreshs", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.sourceSecurityType = software.amazon.jsii.Kernel.get(this, "sourceSecurityType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.fileSystemId = java.util.Objects.requireNonNull(builder.fileSystemId, "fileSystemId is required");
            this.fsetId = java.util.Objects.requireNonNull(builder.fsetId, "fsetId is required");
            this.sourceStorage = java.util.Objects.requireNonNull(builder.sourceStorage, "sourceStorage is required");
            this.throughput = java.util.Objects.requireNonNull(builder.throughput, "throughput is required");
            this.autoRefreshInterval = builder.autoRefreshInterval;
            this.autoRefreshPolicy = builder.autoRefreshPolicy;
            this.autoRefreshs = builder.autoRefreshs;
            this.description = builder.description;
            this.sourceSecurityType = builder.sourceSecurityType;
        }

        @Override
        public final java.lang.Object getFileSystemId() {
            return this.fileSystemId;
        }

        @Override
        public final java.lang.Object getFsetId() {
            return this.fsetId;
        }

        @Override
        public final java.lang.Object getSourceStorage() {
            return this.sourceStorage;
        }

        @Override
        public final java.lang.Object getThroughput() {
            return this.throughput;
        }

        @Override
        public final java.lang.Object getAutoRefreshInterval() {
            return this.autoRefreshInterval;
        }

        @Override
        public final java.lang.Object getAutoRefreshPolicy() {
            return this.autoRefreshPolicy;
        }

        @Override
        public final java.lang.Object getAutoRefreshs() {
            return this.autoRefreshs;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getSourceSecurityType() {
            return this.sourceSecurityType;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("fileSystemId", om.valueToTree(this.getFileSystemId()));
            data.set("fsetId", om.valueToTree(this.getFsetId()));
            data.set("sourceStorage", om.valueToTree(this.getSourceStorage()));
            data.set("throughput", om.valueToTree(this.getThroughput()));
            if (this.getAutoRefreshInterval() != null) {
                data.set("autoRefreshInterval", om.valueToTree(this.getAutoRefreshInterval()));
            }
            if (this.getAutoRefreshPolicy() != null) {
                data.set("autoRefreshPolicy", om.valueToTree(this.getAutoRefreshPolicy()));
            }
            if (this.getAutoRefreshs() != null) {
                data.set("autoRefreshs", om.valueToTree(this.getAutoRefreshs()));
            }
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getSourceSecurityType() != null) {
                data.set("sourceSecurityType", om.valueToTree(this.getSourceSecurityType()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-nas.RosDataFlowProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosDataFlowProps.Jsii$Proxy that = (RosDataFlowProps.Jsii$Proxy) o;

            if (!fileSystemId.equals(that.fileSystemId)) return false;
            if (!fsetId.equals(that.fsetId)) return false;
            if (!sourceStorage.equals(that.sourceStorage)) return false;
            if (!throughput.equals(that.throughput)) return false;
            if (this.autoRefreshInterval != null ? !this.autoRefreshInterval.equals(that.autoRefreshInterval) : that.autoRefreshInterval != null) return false;
            if (this.autoRefreshPolicy != null ? !this.autoRefreshPolicy.equals(that.autoRefreshPolicy) : that.autoRefreshPolicy != null) return false;
            if (this.autoRefreshs != null ? !this.autoRefreshs.equals(that.autoRefreshs) : that.autoRefreshs != null) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            return this.sourceSecurityType != null ? this.sourceSecurityType.equals(that.sourceSecurityType) : that.sourceSecurityType == null;
        }

        @Override
        public final int hashCode() {
            int result = this.fileSystemId.hashCode();
            result = 31 * result + (this.fsetId.hashCode());
            result = 31 * result + (this.sourceStorage.hashCode());
            result = 31 * result + (this.throughput.hashCode());
            result = 31 * result + (this.autoRefreshInterval != null ? this.autoRefreshInterval.hashCode() : 0);
            result = 31 * result + (this.autoRefreshPolicy != null ? this.autoRefreshPolicy.hashCode() : 0);
            result = 31 * result + (this.autoRefreshs != null ? this.autoRefreshs.hashCode() : 0);
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.sourceSecurityType != null ? this.sourceSecurityType.hashCode() : 0);
            return result;
        }
    }
}
