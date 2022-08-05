package com.aliyun.ros.cdk.sls;

/**
 * Properties for defining a `ALIYUN::SLS::MetricStore`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.63.2 (build a8a8833)", date = "2022-08-05T07:29:05.705Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.sls.$Module.class, fqn = "@alicloud/ros-cdk-sls.MetricStoreProps")
@software.amazon.jsii.Jsii.Proxy(MetricStoreProps.Jsii$Proxy.class)
public interface MetricStoreProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property logstoreName: Metric store name: 1.
     * <p>
     * Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
     * 2. Must start and end with lowercase letters and numbers.
     * 3. The name length is 3-63 characters.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getLogstoreName();

    /**
     * Property projectName: Project name: 1.
     * <p>
     * Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
     * 2. Must start and end with lowercase letters and numbers.
     * 3. The name length is 3-63 characters.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getProjectName();

    /**
     * Property preserveStorage: Whether to keep the log permanently.
     * <p>
     * If set to true, TTL will be ignored.
     * Default to false.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPreserveStorage() {
        return null;
    }

    /**
     * Property shardCount: The number of Shards.
     * <p>
     * Allowed Values: 1-10, default to 2.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getShardCount() {
        return null;
    }

    /**
     * Property ttl: The lifecycle of log in the metrice store in days.
     * <p>
     * Allowed Values: 1-3000, default to 30.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTtl() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link MetricStoreProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link MetricStoreProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<MetricStoreProps> {
        java.lang.Object logstoreName;
        java.lang.Object projectName;
        java.lang.Object preserveStorage;
        java.lang.Object shardCount;
        java.lang.Object ttl;

        /**
         * Sets the value of {@link MetricStoreProps#getLogstoreName}
         * @param logstoreName Property logstoreName: Metric store name: 1. This parameter is required.
         *                     Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
         *                     2. Must start and end with lowercase letters and numbers.
         *                     3. The name length is 3-63 characters.
         * @return {@code this}
         */
        public Builder logstoreName(java.lang.String logstoreName) {
            this.logstoreName = logstoreName;
            return this;
        }

        /**
         * Sets the value of {@link MetricStoreProps#getLogstoreName}
         * @param logstoreName Property logstoreName: Metric store name: 1. This parameter is required.
         *                     Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
         *                     2. Must start and end with lowercase letters and numbers.
         *                     3. The name length is 3-63 characters.
         * @return {@code this}
         */
        public Builder logstoreName(com.aliyun.ros.cdk.core.IResolvable logstoreName) {
            this.logstoreName = logstoreName;
            return this;
        }

        /**
         * Sets the value of {@link MetricStoreProps#getProjectName}
         * @param projectName Property projectName: Project name: 1. This parameter is required.
         *                    Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
         *                    2. Must start and end with lowercase letters and numbers.
         *                    3. The name length is 3-63 characters.
         * @return {@code this}
         */
        public Builder projectName(java.lang.String projectName) {
            this.projectName = projectName;
            return this;
        }

        /**
         * Sets the value of {@link MetricStoreProps#getProjectName}
         * @param projectName Property projectName: Project name: 1. This parameter is required.
         *                    Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
         *                    2. Must start and end with lowercase letters and numbers.
         *                    3. The name length is 3-63 characters.
         * @return {@code this}
         */
        public Builder projectName(com.aliyun.ros.cdk.core.IResolvable projectName) {
            this.projectName = projectName;
            return this;
        }

        /**
         * Sets the value of {@link MetricStoreProps#getPreserveStorage}
         * @param preserveStorage Property preserveStorage: Whether to keep the log permanently.
         *                        If set to true, TTL will be ignored.
         *                        Default to false.
         * @return {@code this}
         */
        public Builder preserveStorage(java.lang.Boolean preserveStorage) {
            this.preserveStorage = preserveStorage;
            return this;
        }

        /**
         * Sets the value of {@link MetricStoreProps#getPreserveStorage}
         * @param preserveStorage Property preserveStorage: Whether to keep the log permanently.
         *                        If set to true, TTL will be ignored.
         *                        Default to false.
         * @return {@code this}
         */
        public Builder preserveStorage(com.aliyun.ros.cdk.core.IResolvable preserveStorage) {
            this.preserveStorage = preserveStorage;
            return this;
        }

        /**
         * Sets the value of {@link MetricStoreProps#getShardCount}
         * @param shardCount Property shardCount: The number of Shards.
         *                   Allowed Values: 1-10, default to 2.
         * @return {@code this}
         */
        public Builder shardCount(java.lang.Number shardCount) {
            this.shardCount = shardCount;
            return this;
        }

        /**
         * Sets the value of {@link MetricStoreProps#getShardCount}
         * @param shardCount Property shardCount: The number of Shards.
         *                   Allowed Values: 1-10, default to 2.
         * @return {@code this}
         */
        public Builder shardCount(com.aliyun.ros.cdk.core.IResolvable shardCount) {
            this.shardCount = shardCount;
            return this;
        }

        /**
         * Sets the value of {@link MetricStoreProps#getTtl}
         * @param ttl Property ttl: The lifecycle of log in the metrice store in days.
         *            Allowed Values: 1-3000, default to 30.
         * @return {@code this}
         */
        public Builder ttl(java.lang.Number ttl) {
            this.ttl = ttl;
            return this;
        }

        /**
         * Sets the value of {@link MetricStoreProps#getTtl}
         * @param ttl Property ttl: The lifecycle of log in the metrice store in days.
         *            Allowed Values: 1-3000, default to 30.
         * @return {@code this}
         */
        public Builder ttl(com.aliyun.ros.cdk.core.IResolvable ttl) {
            this.ttl = ttl;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link MetricStoreProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public MetricStoreProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link MetricStoreProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements MetricStoreProps {
        private final java.lang.Object logstoreName;
        private final java.lang.Object projectName;
        private final java.lang.Object preserveStorage;
        private final java.lang.Object shardCount;
        private final java.lang.Object ttl;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.logstoreName = software.amazon.jsii.Kernel.get(this, "logstoreName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.projectName = software.amazon.jsii.Kernel.get(this, "projectName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.preserveStorage = software.amazon.jsii.Kernel.get(this, "preserveStorage", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.shardCount = software.amazon.jsii.Kernel.get(this, "shardCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ttl = software.amazon.jsii.Kernel.get(this, "ttl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.logstoreName = java.util.Objects.requireNonNull(builder.logstoreName, "logstoreName is required");
            this.projectName = java.util.Objects.requireNonNull(builder.projectName, "projectName is required");
            this.preserveStorage = builder.preserveStorage;
            this.shardCount = builder.shardCount;
            this.ttl = builder.ttl;
        }

        @Override
        public final java.lang.Object getLogstoreName() {
            return this.logstoreName;
        }

        @Override
        public final java.lang.Object getProjectName() {
            return this.projectName;
        }

        @Override
        public final java.lang.Object getPreserveStorage() {
            return this.preserveStorage;
        }

        @Override
        public final java.lang.Object getShardCount() {
            return this.shardCount;
        }

        @Override
        public final java.lang.Object getTtl() {
            return this.ttl;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("logstoreName", om.valueToTree(this.getLogstoreName()));
            data.set("projectName", om.valueToTree(this.getProjectName()));
            if (this.getPreserveStorage() != null) {
                data.set("preserveStorage", om.valueToTree(this.getPreserveStorage()));
            }
            if (this.getShardCount() != null) {
                data.set("shardCount", om.valueToTree(this.getShardCount()));
            }
            if (this.getTtl() != null) {
                data.set("ttl", om.valueToTree(this.getTtl()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-sls.MetricStoreProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            MetricStoreProps.Jsii$Proxy that = (MetricStoreProps.Jsii$Proxy) o;

            if (!logstoreName.equals(that.logstoreName)) return false;
            if (!projectName.equals(that.projectName)) return false;
            if (this.preserveStorage != null ? !this.preserveStorage.equals(that.preserveStorage) : that.preserveStorage != null) return false;
            if (this.shardCount != null ? !this.shardCount.equals(that.shardCount) : that.shardCount != null) return false;
            return this.ttl != null ? this.ttl.equals(that.ttl) : that.ttl == null;
        }

        @Override
        public final int hashCode() {
            int result = this.logstoreName.hashCode();
            result = 31 * result + (this.projectName.hashCode());
            result = 31 * result + (this.preserveStorage != null ? this.preserveStorage.hashCode() : 0);
            result = 31 * result + (this.shardCount != null ? this.shardCount.hashCode() : 0);
            result = 31 * result + (this.ttl != null ? this.ttl.hashCode() : 0);
            return result;
        }
    }
}
