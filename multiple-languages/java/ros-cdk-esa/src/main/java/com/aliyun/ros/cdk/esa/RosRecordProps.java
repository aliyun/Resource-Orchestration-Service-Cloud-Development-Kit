package com.aliyun.ros.cdk.esa;

/**
 * Properties for defining a <code>RosRecord</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-record
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:56.680Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.esa.$Module.class, fqn = "@alicloud/ros-cdk-esa.RosRecordProps")
@software.amazon.jsii.Jsii.Proxy(RosRecordProps.Jsii$Proxy.class)
public interface RosRecordProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getData();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getRecordName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getRecordType();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSiteId();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAuthConf() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getBizName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getComment() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getHostPolicy() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getProxied() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSourceType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTtl() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosRecordProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosRecordProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosRecordProps> {
        java.lang.Object data;
        java.lang.Object recordName;
        java.lang.Object recordType;
        java.lang.Object siteId;
        java.lang.Object authConf;
        java.lang.Object bizName;
        java.lang.Object comment;
        java.lang.Object hostPolicy;
        java.lang.Object proxied;
        java.lang.Object sourceType;
        java.lang.Object ttl;

        /**
         * Sets the value of {@link RosRecordProps#getData}
         * @param data the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder data(com.aliyun.ros.cdk.core.IResolvable data) {
            this.data = data;
            return this;
        }

        /**
         * Sets the value of {@link RosRecordProps#getData}
         * @param data the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder data(com.aliyun.ros.cdk.esa.RosRecord.DataProperty data) {
            this.data = data;
            return this;
        }

        /**
         * Sets the value of {@link RosRecordProps#getRecordName}
         * @param recordName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder recordName(java.lang.String recordName) {
            this.recordName = recordName;
            return this;
        }

        /**
         * Sets the value of {@link RosRecordProps#getRecordName}
         * @param recordName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder recordName(com.aliyun.ros.cdk.core.IResolvable recordName) {
            this.recordName = recordName;
            return this;
        }

        /**
         * Sets the value of {@link RosRecordProps#getRecordType}
         * @param recordType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder recordType(java.lang.String recordType) {
            this.recordType = recordType;
            return this;
        }

        /**
         * Sets the value of {@link RosRecordProps#getRecordType}
         * @param recordType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder recordType(com.aliyun.ros.cdk.core.IResolvable recordType) {
            this.recordType = recordType;
            return this;
        }

        /**
         * Sets the value of {@link RosRecordProps#getSiteId}
         * @param siteId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder siteId(java.lang.Number siteId) {
            this.siteId = siteId;
            return this;
        }

        /**
         * Sets the value of {@link RosRecordProps#getSiteId}
         * @param siteId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder siteId(com.aliyun.ros.cdk.core.IResolvable siteId) {
            this.siteId = siteId;
            return this;
        }

        /**
         * Sets the value of {@link RosRecordProps#getAuthConf}
         * @param authConf the value to be set.
         * @return {@code this}
         */
        public Builder authConf(com.aliyun.ros.cdk.core.IResolvable authConf) {
            this.authConf = authConf;
            return this;
        }

        /**
         * Sets the value of {@link RosRecordProps#getAuthConf}
         * @param authConf the value to be set.
         * @return {@code this}
         */
        public Builder authConf(com.aliyun.ros.cdk.esa.RosRecord.AuthConfProperty authConf) {
            this.authConf = authConf;
            return this;
        }

        /**
         * Sets the value of {@link RosRecordProps#getBizName}
         * @param bizName the value to be set.
         * @return {@code this}
         */
        public Builder bizName(java.lang.String bizName) {
            this.bizName = bizName;
            return this;
        }

        /**
         * Sets the value of {@link RosRecordProps#getBizName}
         * @param bizName the value to be set.
         * @return {@code this}
         */
        public Builder bizName(com.aliyun.ros.cdk.core.IResolvable bizName) {
            this.bizName = bizName;
            return this;
        }

        /**
         * Sets the value of {@link RosRecordProps#getComment}
         * @param comment the value to be set.
         * @return {@code this}
         */
        public Builder comment(java.lang.String comment) {
            this.comment = comment;
            return this;
        }

        /**
         * Sets the value of {@link RosRecordProps#getComment}
         * @param comment the value to be set.
         * @return {@code this}
         */
        public Builder comment(com.aliyun.ros.cdk.core.IResolvable comment) {
            this.comment = comment;
            return this;
        }

        /**
         * Sets the value of {@link RosRecordProps#getHostPolicy}
         * @param hostPolicy the value to be set.
         * @return {@code this}
         */
        public Builder hostPolicy(java.lang.String hostPolicy) {
            this.hostPolicy = hostPolicy;
            return this;
        }

        /**
         * Sets the value of {@link RosRecordProps#getHostPolicy}
         * @param hostPolicy the value to be set.
         * @return {@code this}
         */
        public Builder hostPolicy(com.aliyun.ros.cdk.core.IResolvable hostPolicy) {
            this.hostPolicy = hostPolicy;
            return this;
        }

        /**
         * Sets the value of {@link RosRecordProps#getProxied}
         * @param proxied the value to be set.
         * @return {@code this}
         */
        public Builder proxied(java.lang.Boolean proxied) {
            this.proxied = proxied;
            return this;
        }

        /**
         * Sets the value of {@link RosRecordProps#getProxied}
         * @param proxied the value to be set.
         * @return {@code this}
         */
        public Builder proxied(com.aliyun.ros.cdk.core.IResolvable proxied) {
            this.proxied = proxied;
            return this;
        }

        /**
         * Sets the value of {@link RosRecordProps#getSourceType}
         * @param sourceType the value to be set.
         * @return {@code this}
         */
        public Builder sourceType(java.lang.String sourceType) {
            this.sourceType = sourceType;
            return this;
        }

        /**
         * Sets the value of {@link RosRecordProps#getSourceType}
         * @param sourceType the value to be set.
         * @return {@code this}
         */
        public Builder sourceType(com.aliyun.ros.cdk.core.IResolvable sourceType) {
            this.sourceType = sourceType;
            return this;
        }

        /**
         * Sets the value of {@link RosRecordProps#getTtl}
         * @param ttl the value to be set.
         * @return {@code this}
         */
        public Builder ttl(java.lang.Number ttl) {
            this.ttl = ttl;
            return this;
        }

        /**
         * Sets the value of {@link RosRecordProps#getTtl}
         * @param ttl the value to be set.
         * @return {@code this}
         */
        public Builder ttl(com.aliyun.ros.cdk.core.IResolvable ttl) {
            this.ttl = ttl;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosRecordProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosRecordProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosRecordProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosRecordProps {
        private final java.lang.Object data;
        private final java.lang.Object recordName;
        private final java.lang.Object recordType;
        private final java.lang.Object siteId;
        private final java.lang.Object authConf;
        private final java.lang.Object bizName;
        private final java.lang.Object comment;
        private final java.lang.Object hostPolicy;
        private final java.lang.Object proxied;
        private final java.lang.Object sourceType;
        private final java.lang.Object ttl;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.data = software.amazon.jsii.Kernel.get(this, "data", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.recordName = software.amazon.jsii.Kernel.get(this, "recordName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.recordType = software.amazon.jsii.Kernel.get(this, "recordType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.siteId = software.amazon.jsii.Kernel.get(this, "siteId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.authConf = software.amazon.jsii.Kernel.get(this, "authConf", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.bizName = software.amazon.jsii.Kernel.get(this, "bizName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.comment = software.amazon.jsii.Kernel.get(this, "comment", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.hostPolicy = software.amazon.jsii.Kernel.get(this, "hostPolicy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.proxied = software.amazon.jsii.Kernel.get(this, "proxied", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.sourceType = software.amazon.jsii.Kernel.get(this, "sourceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ttl = software.amazon.jsii.Kernel.get(this, "ttl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.data = java.util.Objects.requireNonNull(builder.data, "data is required");
            this.recordName = java.util.Objects.requireNonNull(builder.recordName, "recordName is required");
            this.recordType = java.util.Objects.requireNonNull(builder.recordType, "recordType is required");
            this.siteId = java.util.Objects.requireNonNull(builder.siteId, "siteId is required");
            this.authConf = builder.authConf;
            this.bizName = builder.bizName;
            this.comment = builder.comment;
            this.hostPolicy = builder.hostPolicy;
            this.proxied = builder.proxied;
            this.sourceType = builder.sourceType;
            this.ttl = builder.ttl;
        }

        @Override
        public final java.lang.Object getData() {
            return this.data;
        }

        @Override
        public final java.lang.Object getRecordName() {
            return this.recordName;
        }

        @Override
        public final java.lang.Object getRecordType() {
            return this.recordType;
        }

        @Override
        public final java.lang.Object getSiteId() {
            return this.siteId;
        }

        @Override
        public final java.lang.Object getAuthConf() {
            return this.authConf;
        }

        @Override
        public final java.lang.Object getBizName() {
            return this.bizName;
        }

        @Override
        public final java.lang.Object getComment() {
            return this.comment;
        }

        @Override
        public final java.lang.Object getHostPolicy() {
            return this.hostPolicy;
        }

        @Override
        public final java.lang.Object getProxied() {
            return this.proxied;
        }

        @Override
        public final java.lang.Object getSourceType() {
            return this.sourceType;
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

            data.set("data", om.valueToTree(this.getData()));
            data.set("recordName", om.valueToTree(this.getRecordName()));
            data.set("recordType", om.valueToTree(this.getRecordType()));
            data.set("siteId", om.valueToTree(this.getSiteId()));
            if (this.getAuthConf() != null) {
                data.set("authConf", om.valueToTree(this.getAuthConf()));
            }
            if (this.getBizName() != null) {
                data.set("bizName", om.valueToTree(this.getBizName()));
            }
            if (this.getComment() != null) {
                data.set("comment", om.valueToTree(this.getComment()));
            }
            if (this.getHostPolicy() != null) {
                data.set("hostPolicy", om.valueToTree(this.getHostPolicy()));
            }
            if (this.getProxied() != null) {
                data.set("proxied", om.valueToTree(this.getProxied()));
            }
            if (this.getSourceType() != null) {
                data.set("sourceType", om.valueToTree(this.getSourceType()));
            }
            if (this.getTtl() != null) {
                data.set("ttl", om.valueToTree(this.getTtl()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-esa.RosRecordProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosRecordProps.Jsii$Proxy that = (RosRecordProps.Jsii$Proxy) o;

            if (!data.equals(that.data)) return false;
            if (!recordName.equals(that.recordName)) return false;
            if (!recordType.equals(that.recordType)) return false;
            if (!siteId.equals(that.siteId)) return false;
            if (this.authConf != null ? !this.authConf.equals(that.authConf) : that.authConf != null) return false;
            if (this.bizName != null ? !this.bizName.equals(that.bizName) : that.bizName != null) return false;
            if (this.comment != null ? !this.comment.equals(that.comment) : that.comment != null) return false;
            if (this.hostPolicy != null ? !this.hostPolicy.equals(that.hostPolicy) : that.hostPolicy != null) return false;
            if (this.proxied != null ? !this.proxied.equals(that.proxied) : that.proxied != null) return false;
            if (this.sourceType != null ? !this.sourceType.equals(that.sourceType) : that.sourceType != null) return false;
            return this.ttl != null ? this.ttl.equals(that.ttl) : that.ttl == null;
        }

        @Override
        public final int hashCode() {
            int result = this.data.hashCode();
            result = 31 * result + (this.recordName.hashCode());
            result = 31 * result + (this.recordType.hashCode());
            result = 31 * result + (this.siteId.hashCode());
            result = 31 * result + (this.authConf != null ? this.authConf.hashCode() : 0);
            result = 31 * result + (this.bizName != null ? this.bizName.hashCode() : 0);
            result = 31 * result + (this.comment != null ? this.comment.hashCode() : 0);
            result = 31 * result + (this.hostPolicy != null ? this.hostPolicy.hashCode() : 0);
            result = 31 * result + (this.proxied != null ? this.proxied.hashCode() : 0);
            result = 31 * result + (this.sourceType != null ? this.sourceType.hashCode() : 0);
            result = 31 * result + (this.ttl != null ? this.ttl.hashCode() : 0);
            return result;
        }
    }
}
