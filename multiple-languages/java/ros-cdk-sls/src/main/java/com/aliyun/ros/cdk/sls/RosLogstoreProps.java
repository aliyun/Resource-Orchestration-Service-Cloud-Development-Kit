package com.aliyun.ros.cdk.sls;

/**
 * Properties for defining a `ALIYUN::SLS::Logstore`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.53.0 (build c071d26)", date = "2022-02-11T01:44:08.530Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.sls.$Module.class, fqn = "@alicloud/ros-cdk-sls.RosLogstoreProps")
@software.amazon.jsii.Jsii.Proxy(RosLogstoreProps.Jsii$Proxy.class)
public interface RosLogstoreProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getLogstoreName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getProjectName();

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
    default @org.jetbrains.annotations.Nullable java.lang.Object getEncryptConf() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMaxSplitShard() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPreserveStorage() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getShardCount() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTtl() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosLogstoreProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosLogstoreProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosLogstoreProps> {
        java.lang.Object logstoreName;
        java.lang.Object projectName;
        java.lang.Object appendMeta;
        java.lang.Object autoSplit;
        java.lang.Object enableTracking;
        java.lang.Object encryptConf;
        java.lang.Object maxSplitShard;
        java.lang.Object preserveStorage;
        java.lang.Object shardCount;
        java.lang.Object ttl;

        /**
         * Sets the value of {@link RosLogstoreProps#getLogstoreName}
         * @param logstoreName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder logstoreName(java.lang.String logstoreName) {
            this.logstoreName = logstoreName;
            return this;
        }

        /**
         * Sets the value of {@link RosLogstoreProps#getLogstoreName}
         * @param logstoreName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder logstoreName(com.aliyun.ros.cdk.core.IResolvable logstoreName) {
            this.logstoreName = logstoreName;
            return this;
        }

        /**
         * Sets the value of {@link RosLogstoreProps#getProjectName}
         * @param projectName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder projectName(java.lang.String projectName) {
            this.projectName = projectName;
            return this;
        }

        /**
         * Sets the value of {@link RosLogstoreProps#getProjectName}
         * @param projectName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder projectName(com.aliyun.ros.cdk.core.IResolvable projectName) {
            this.projectName = projectName;
            return this;
        }

        /**
         * Sets the value of {@link RosLogstoreProps#getAppendMeta}
         * @param appendMeta the value to be set.
         * @return {@code this}
         */
        public Builder appendMeta(java.lang.Boolean appendMeta) {
            this.appendMeta = appendMeta;
            return this;
        }

        /**
         * Sets the value of {@link RosLogstoreProps#getAppendMeta}
         * @param appendMeta the value to be set.
         * @return {@code this}
         */
        public Builder appendMeta(com.aliyun.ros.cdk.core.IResolvable appendMeta) {
            this.appendMeta = appendMeta;
            return this;
        }

        /**
         * Sets the value of {@link RosLogstoreProps#getAutoSplit}
         * @param autoSplit the value to be set.
         * @return {@code this}
         */
        public Builder autoSplit(java.lang.Boolean autoSplit) {
            this.autoSplit = autoSplit;
            return this;
        }

        /**
         * Sets the value of {@link RosLogstoreProps#getAutoSplit}
         * @param autoSplit the value to be set.
         * @return {@code this}
         */
        public Builder autoSplit(com.aliyun.ros.cdk.core.IResolvable autoSplit) {
            this.autoSplit = autoSplit;
            return this;
        }

        /**
         * Sets the value of {@link RosLogstoreProps#getEnableTracking}
         * @param enableTracking the value to be set.
         * @return {@code this}
         */
        public Builder enableTracking(java.lang.Boolean enableTracking) {
            this.enableTracking = enableTracking;
            return this;
        }

        /**
         * Sets the value of {@link RosLogstoreProps#getEnableTracking}
         * @param enableTracking the value to be set.
         * @return {@code this}
         */
        public Builder enableTracking(com.aliyun.ros.cdk.core.IResolvable enableTracking) {
            this.enableTracking = enableTracking;
            return this;
        }

        /**
         * Sets the value of {@link RosLogstoreProps#getEncryptConf}
         * @param encryptConf the value to be set.
         * @return {@code this}
         */
        public Builder encryptConf(com.aliyun.ros.cdk.core.IResolvable encryptConf) {
            this.encryptConf = encryptConf;
            return this;
        }

        /**
         * Sets the value of {@link RosLogstoreProps#getEncryptConf}
         * @param encryptConf the value to be set.
         * @return {@code this}
         */
        public Builder encryptConf(com.aliyun.ros.cdk.sls.RosLogstore.EncryptConfProperty encryptConf) {
            this.encryptConf = encryptConf;
            return this;
        }

        /**
         * Sets the value of {@link RosLogstoreProps#getMaxSplitShard}
         * @param maxSplitShard the value to be set.
         * @return {@code this}
         */
        public Builder maxSplitShard(java.lang.Number maxSplitShard) {
            this.maxSplitShard = maxSplitShard;
            return this;
        }

        /**
         * Sets the value of {@link RosLogstoreProps#getMaxSplitShard}
         * @param maxSplitShard the value to be set.
         * @return {@code this}
         */
        public Builder maxSplitShard(com.aliyun.ros.cdk.core.IResolvable maxSplitShard) {
            this.maxSplitShard = maxSplitShard;
            return this;
        }

        /**
         * Sets the value of {@link RosLogstoreProps#getPreserveStorage}
         * @param preserveStorage the value to be set.
         * @return {@code this}
         */
        public Builder preserveStorage(java.lang.Boolean preserveStorage) {
            this.preserveStorage = preserveStorage;
            return this;
        }

        /**
         * Sets the value of {@link RosLogstoreProps#getPreserveStorage}
         * @param preserveStorage the value to be set.
         * @return {@code this}
         */
        public Builder preserveStorage(com.aliyun.ros.cdk.core.IResolvable preserveStorage) {
            this.preserveStorage = preserveStorage;
            return this;
        }

        /**
         * Sets the value of {@link RosLogstoreProps#getShardCount}
         * @param shardCount the value to be set.
         * @return {@code this}
         */
        public Builder shardCount(java.lang.Number shardCount) {
            this.shardCount = shardCount;
            return this;
        }

        /**
         * Sets the value of {@link RosLogstoreProps#getShardCount}
         * @param shardCount the value to be set.
         * @return {@code this}
         */
        public Builder shardCount(com.aliyun.ros.cdk.core.IResolvable shardCount) {
            this.shardCount = shardCount;
            return this;
        }

        /**
         * Sets the value of {@link RosLogstoreProps#getTtl}
         * @param ttl the value to be set.
         * @return {@code this}
         */
        public Builder ttl(java.lang.Number ttl) {
            this.ttl = ttl;
            return this;
        }

        /**
         * Sets the value of {@link RosLogstoreProps#getTtl}
         * @param ttl the value to be set.
         * @return {@code this}
         */
        public Builder ttl(com.aliyun.ros.cdk.core.IResolvable ttl) {
            this.ttl = ttl;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosLogstoreProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosLogstoreProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosLogstoreProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosLogstoreProps {
        private final java.lang.Object logstoreName;
        private final java.lang.Object projectName;
        private final java.lang.Object appendMeta;
        private final java.lang.Object autoSplit;
        private final java.lang.Object enableTracking;
        private final java.lang.Object encryptConf;
        private final java.lang.Object maxSplitShard;
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
            this.appendMeta = software.amazon.jsii.Kernel.get(this, "appendMeta", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.autoSplit = software.amazon.jsii.Kernel.get(this, "autoSplit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.enableTracking = software.amazon.jsii.Kernel.get(this, "enableTracking", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.encryptConf = software.amazon.jsii.Kernel.get(this, "encryptConf", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.maxSplitShard = software.amazon.jsii.Kernel.get(this, "maxSplitShard", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
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
            this.appendMeta = builder.appendMeta;
            this.autoSplit = builder.autoSplit;
            this.enableTracking = builder.enableTracking;
            this.encryptConf = builder.encryptConf;
            this.maxSplitShard = builder.maxSplitShard;
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
        public final java.lang.Object getEncryptConf() {
            return this.encryptConf;
        }

        @Override
        public final java.lang.Object getMaxSplitShard() {
            return this.maxSplitShard;
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
            if (this.getAppendMeta() != null) {
                data.set("appendMeta", om.valueToTree(this.getAppendMeta()));
            }
            if (this.getAutoSplit() != null) {
                data.set("autoSplit", om.valueToTree(this.getAutoSplit()));
            }
            if (this.getEnableTracking() != null) {
                data.set("enableTracking", om.valueToTree(this.getEnableTracking()));
            }
            if (this.getEncryptConf() != null) {
                data.set("encryptConf", om.valueToTree(this.getEncryptConf()));
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
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-sls.RosLogstoreProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosLogstoreProps.Jsii$Proxy that = (RosLogstoreProps.Jsii$Proxy) o;

            if (!logstoreName.equals(that.logstoreName)) return false;
            if (!projectName.equals(that.projectName)) return false;
            if (this.appendMeta != null ? !this.appendMeta.equals(that.appendMeta) : that.appendMeta != null) return false;
            if (this.autoSplit != null ? !this.autoSplit.equals(that.autoSplit) : that.autoSplit != null) return false;
            if (this.enableTracking != null ? !this.enableTracking.equals(that.enableTracking) : that.enableTracking != null) return false;
            if (this.encryptConf != null ? !this.encryptConf.equals(that.encryptConf) : that.encryptConf != null) return false;
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
            result = 31 * result + (this.encryptConf != null ? this.encryptConf.hashCode() : 0);
            result = 31 * result + (this.maxSplitShard != null ? this.maxSplitShard.hashCode() : 0);
            result = 31 * result + (this.preserveStorage != null ? this.preserveStorage.hashCode() : 0);
            result = 31 * result + (this.shardCount != null ? this.shardCount.hashCode() : 0);
            result = 31 * result + (this.ttl != null ? this.ttl.hashCode() : 0);
            return result;
        }
    }
}
