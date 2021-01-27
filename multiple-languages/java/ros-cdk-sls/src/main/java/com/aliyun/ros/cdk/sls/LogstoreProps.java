package com.aliyun.ros.cdk.sls;

/**
 * Properties for defining a `ALIYUN::SLS::Logstore`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-01-26T09:47:34.597Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.sls.$Module.class, fqn = "@alicloud/ros-cdk-sls.LogstoreProps")
@software.amazon.jsii.Jsii.Proxy(LogstoreProps.Jsii$Proxy.class)
public interface LogstoreProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getLogstoreName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getProjectName();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAppendMeta() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAutoSplit() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEnableTracking() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Number getMaxSplitShard() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPreserveStorage() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Number getShardCount() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Number getTtl() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link LogstoreProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link LogstoreProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<LogstoreProps> {
        private java.lang.String logstoreName;
        private java.lang.String projectName;
        private java.lang.Object appendMeta;
        private java.lang.Object autoSplit;
        private java.lang.Object enableTracking;
        private java.lang.Number maxSplitShard;
        private java.lang.Object preserveStorage;
        private java.lang.Number shardCount;
        private java.lang.Number ttl;

        /**
         * Sets the value of {@link LogstoreProps#getLogstoreName}
         * @param logstoreName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder logstoreName(java.lang.String logstoreName) {
            this.logstoreName = logstoreName;
            return this;
        }

        /**
         * Sets the value of {@link LogstoreProps#getProjectName}
         * @param projectName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder projectName(java.lang.String projectName) {
            this.projectName = projectName;
            return this;
        }

        /**
         * Sets the value of {@link LogstoreProps#getAppendMeta}
         * @param appendMeta the value to be set.
         * @return {@code this}
         */
        public Builder appendMeta(java.lang.Boolean appendMeta) {
            this.appendMeta = appendMeta;
            return this;
        }

        /**
         * Sets the value of {@link LogstoreProps#getAppendMeta}
         * @param appendMeta the value to be set.
         * @return {@code this}
         */
        public Builder appendMeta(com.aliyun.ros.cdk.core.IResolvable appendMeta) {
            this.appendMeta = appendMeta;
            return this;
        }

        /**
         * Sets the value of {@link LogstoreProps#getAutoSplit}
         * @param autoSplit the value to be set.
         * @return {@code this}
         */
        public Builder autoSplit(java.lang.Boolean autoSplit) {
            this.autoSplit = autoSplit;
            return this;
        }

        /**
         * Sets the value of {@link LogstoreProps#getAutoSplit}
         * @param autoSplit the value to be set.
         * @return {@code this}
         */
        public Builder autoSplit(com.aliyun.ros.cdk.core.IResolvable autoSplit) {
            this.autoSplit = autoSplit;
            return this;
        }

        /**
         * Sets the value of {@link LogstoreProps#getEnableTracking}
         * @param enableTracking the value to be set.
         * @return {@code this}
         */
        public Builder enableTracking(java.lang.Boolean enableTracking) {
            this.enableTracking = enableTracking;
            return this;
        }

        /**
         * Sets the value of {@link LogstoreProps#getEnableTracking}
         * @param enableTracking the value to be set.
         * @return {@code this}
         */
        public Builder enableTracking(com.aliyun.ros.cdk.core.IResolvable enableTracking) {
            this.enableTracking = enableTracking;
            return this;
        }

        /**
         * Sets the value of {@link LogstoreProps#getMaxSplitShard}
         * @param maxSplitShard the value to be set.
         * @return {@code this}
         */
        public Builder maxSplitShard(java.lang.Number maxSplitShard) {
            this.maxSplitShard = maxSplitShard;
            return this;
        }

        /**
         * Sets the value of {@link LogstoreProps#getPreserveStorage}
         * @param preserveStorage the value to be set.
         * @return {@code this}
         */
        public Builder preserveStorage(java.lang.Boolean preserveStorage) {
            this.preserveStorage = preserveStorage;
            return this;
        }

        /**
         * Sets the value of {@link LogstoreProps#getPreserveStorage}
         * @param preserveStorage the value to be set.
         * @return {@code this}
         */
        public Builder preserveStorage(com.aliyun.ros.cdk.core.IResolvable preserveStorage) {
            this.preserveStorage = preserveStorage;
            return this;
        }

        /**
         * Sets the value of {@link LogstoreProps#getShardCount}
         * @param shardCount the value to be set.
         * @return {@code this}
         */
        public Builder shardCount(java.lang.Number shardCount) {
            this.shardCount = shardCount;
            return this;
        }

        /**
         * Sets the value of {@link LogstoreProps#getTtl}
         * @param ttl the value to be set.
         * @return {@code this}
         */
        public Builder ttl(java.lang.Number ttl) {
            this.ttl = ttl;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link LogstoreProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public LogstoreProps build() {
            return new Jsii$Proxy(logstoreName, projectName, appendMeta, autoSplit, enableTracking, maxSplitShard, preserveStorage, shardCount, ttl);
        }
    }

    /**
     * An implementation for {@link LogstoreProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements LogstoreProps {
        private final java.lang.String logstoreName;
        private final java.lang.String projectName;
        private final java.lang.Object appendMeta;
        private final java.lang.Object autoSplit;
        private final java.lang.Object enableTracking;
        private final java.lang.Number maxSplitShard;
        private final java.lang.Object preserveStorage;
        private final java.lang.Number shardCount;
        private final java.lang.Number ttl;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.logstoreName = software.amazon.jsii.Kernel.get(this, "logstoreName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.projectName = software.amazon.jsii.Kernel.get(this, "projectName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.appendMeta = software.amazon.jsii.Kernel.get(this, "appendMeta", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.autoSplit = software.amazon.jsii.Kernel.get(this, "autoSplit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.enableTracking = software.amazon.jsii.Kernel.get(this, "enableTracking", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.maxSplitShard = software.amazon.jsii.Kernel.get(this, "maxSplitShard", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
            this.preserveStorage = software.amazon.jsii.Kernel.get(this, "preserveStorage", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.shardCount = software.amazon.jsii.Kernel.get(this, "shardCount", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
            this.ttl = software.amazon.jsii.Kernel.get(this, "ttl", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final java.lang.String logstoreName, final java.lang.String projectName, final java.lang.Object appendMeta, final java.lang.Object autoSplit, final java.lang.Object enableTracking, final java.lang.Number maxSplitShard, final java.lang.Object preserveStorage, final java.lang.Number shardCount, final java.lang.Number ttl) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.logstoreName = java.util.Objects.requireNonNull(logstoreName, "logstoreName is required");
            this.projectName = java.util.Objects.requireNonNull(projectName, "projectName is required");
            this.appendMeta = appendMeta;
            this.autoSplit = autoSplit;
            this.enableTracking = enableTracking;
            this.maxSplitShard = maxSplitShard;
            this.preserveStorage = preserveStorage;
            this.shardCount = shardCount;
            this.ttl = ttl;
        }

        @Override
        public final java.lang.String getLogstoreName() {
            return this.logstoreName;
        }

        @Override
        public final java.lang.String getProjectName() {
            return this.projectName;
        }

        @Override
        public final java.lang.Object getAppendMeta() {
            return this.appendMeta;
        }

        @Override
        public final java.lang.Object getAutoSplit() {
            return this.autoSplit;
        }

        @Override
        public final java.lang.Object getEnableTracking() {
            return this.enableTracking;
        }

        @Override
        public final java.lang.Number getMaxSplitShard() {
            return this.maxSplitShard;
        }

        @Override
        public final java.lang.Object getPreserveStorage() {
            return this.preserveStorage;
        }

        @Override
        public final java.lang.Number getShardCount() {
            return this.shardCount;
        }

        @Override
        public final java.lang.Number getTtl() {
            return this.ttl;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("logstoreName", om.valueToTree(this.getLogstoreName()));
            data.set("projectName", om.valueToTree(this.getProjectName()));
            if (this.getAppendMeta() != null) {
                data.set("appendMeta", om.valueToTree(this.getAppendMeta()));
            }
            if (this.getAutoSplit() != null) {
                data.set("autoSplit", om.valueToTree(this.getAutoSplit()));
            }
            if (this.getEnableTracking() != null) {
                data.set("enableTracking", om.valueToTree(this.getEnableTracking()));
            }
            if (this.getMaxSplitShard() != null) {
                data.set("maxSplitShard", om.valueToTree(this.getMaxSplitShard()));
            }
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
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-sls.LogstoreProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            LogstoreProps.Jsii$Proxy that = (LogstoreProps.Jsii$Proxy) o;

            if (!logstoreName.equals(that.logstoreName)) return false;
            if (!projectName.equals(that.projectName)) return false;
            if (this.appendMeta != null ? !this.appendMeta.equals(that.appendMeta) : that.appendMeta != null) return false;
            if (this.autoSplit != null ? !this.autoSplit.equals(that.autoSplit) : that.autoSplit != null) return false;
            if (this.enableTracking != null ? !this.enableTracking.equals(that.enableTracking) : that.enableTracking != null) return false;
            if (this.maxSplitShard != null ? !this.maxSplitShard.equals(that.maxSplitShard) : that.maxSplitShard != null) return false;
            if (this.preserveStorage != null ? !this.preserveStorage.equals(that.preserveStorage) : that.preserveStorage != null) return false;
            if (this.shardCount != null ? !this.shardCount.equals(that.shardCount) : that.shardCount != null) return false;
            return this.ttl != null ? this.ttl.equals(that.ttl) : that.ttl == null;
        }

        @Override
        public final int hashCode() {
            int result = this.logstoreName.hashCode();
            result = 31 * result + (this.projectName.hashCode());
            result = 31 * result + (this.appendMeta != null ? this.appendMeta.hashCode() : 0);
            result = 31 * result + (this.autoSplit != null ? this.autoSplit.hashCode() : 0);
            result = 31 * result + (this.enableTracking != null ? this.enableTracking.hashCode() : 0);
            result = 31 * result + (this.maxSplitShard != null ? this.maxSplitShard.hashCode() : 0);
            result = 31 * result + (this.preserveStorage != null ? this.preserveStorage.hashCode() : 0);
            result = 31 * result + (this.shardCount != null ? this.shardCount.hashCode() : 0);
            result = 31 * result + (this.ttl != null ? this.ttl.hashCode() : 0);
            return result;
        }
    }
}
