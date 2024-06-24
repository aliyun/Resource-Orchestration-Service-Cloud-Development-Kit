package com.aliyun.ros.cdk.oss;

/**
 * Properties for defining a <code>ObjectAcl</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-objectacl
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-24T05:57:08.092Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.oss.$Module.class, fqn = "@alicloud/ros-cdk-oss.ObjectAclProps")
@software.amazon.jsii.Jsii.Proxy(ObjectAclProps.Jsii$Proxy.class)
public interface ObjectAclProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property bucket: Bucket name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getBucket();

    /**
     * Property objectAcl: Object acl.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getObjectAcl();

    /**
     * Property objectKey: Object key.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getObjectKey();

    /**
     * @return a {@link Builder} of {@link ObjectAclProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link ObjectAclProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<ObjectAclProps> {
        java.lang.Object bucket;
        java.lang.Object objectAcl;
        java.lang.Object objectKey;

        /**
         * Sets the value of {@link ObjectAclProps#getBucket}
         * @param bucket Property bucket: Bucket name. This parameter is required.
         * @return {@code this}
         */
        public Builder bucket(java.lang.String bucket) {
            this.bucket = bucket;
            return this;
        }

        /**
         * Sets the value of {@link ObjectAclProps#getBucket}
         * @param bucket Property bucket: Bucket name. This parameter is required.
         * @return {@code this}
         */
        public Builder bucket(com.aliyun.ros.cdk.core.IResolvable bucket) {
            this.bucket = bucket;
            return this;
        }

        /**
         * Sets the value of {@link ObjectAclProps#getObjectAcl}
         * @param objectAcl Property objectAcl: Object acl. This parameter is required.
         * @return {@code this}
         */
        public Builder objectAcl(java.lang.String objectAcl) {
            this.objectAcl = objectAcl;
            return this;
        }

        /**
         * Sets the value of {@link ObjectAclProps#getObjectAcl}
         * @param objectAcl Property objectAcl: Object acl. This parameter is required.
         * @return {@code this}
         */
        public Builder objectAcl(com.aliyun.ros.cdk.core.IResolvable objectAcl) {
            this.objectAcl = objectAcl;
            return this;
        }

        /**
         * Sets the value of {@link ObjectAclProps#getObjectKey}
         * @param objectKey Property objectKey: Object key. This parameter is required.
         * @return {@code this}
         */
        public Builder objectKey(java.lang.String objectKey) {
            this.objectKey = objectKey;
            return this;
        }

        /**
         * Sets the value of {@link ObjectAclProps#getObjectKey}
         * @param objectKey Property objectKey: Object key. This parameter is required.
         * @return {@code this}
         */
        public Builder objectKey(com.aliyun.ros.cdk.core.IResolvable objectKey) {
            this.objectKey = objectKey;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link ObjectAclProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public ObjectAclProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link ObjectAclProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ObjectAclProps {
        private final java.lang.Object bucket;
        private final java.lang.Object objectAcl;
        private final java.lang.Object objectKey;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.bucket = software.amazon.jsii.Kernel.get(this, "bucket", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.objectAcl = software.amazon.jsii.Kernel.get(this, "objectAcl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.objectKey = software.amazon.jsii.Kernel.get(this, "objectKey", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.bucket = java.util.Objects.requireNonNull(builder.bucket, "bucket is required");
            this.objectAcl = java.util.Objects.requireNonNull(builder.objectAcl, "objectAcl is required");
            this.objectKey = java.util.Objects.requireNonNull(builder.objectKey, "objectKey is required");
        }

        @Override
        public final java.lang.Object getBucket() {
            return this.bucket;
        }

        @Override
        public final java.lang.Object getObjectAcl() {
            return this.objectAcl;
        }

        @Override
        public final java.lang.Object getObjectKey() {
            return this.objectKey;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("bucket", om.valueToTree(this.getBucket()));
            data.set("objectAcl", om.valueToTree(this.getObjectAcl()));
            data.set("objectKey", om.valueToTree(this.getObjectKey()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-oss.ObjectAclProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            ObjectAclProps.Jsii$Proxy that = (ObjectAclProps.Jsii$Proxy) o;

            if (!bucket.equals(that.bucket)) return false;
            if (!objectAcl.equals(that.objectAcl)) return false;
            return this.objectKey.equals(that.objectKey);
        }

        @Override
        public final int hashCode() {
            int result = this.bucket.hashCode();
            result = 31 * result + (this.objectAcl.hashCode());
            result = 31 * result + (this.objectKey.hashCode());
            return result;
        }
    }
}
