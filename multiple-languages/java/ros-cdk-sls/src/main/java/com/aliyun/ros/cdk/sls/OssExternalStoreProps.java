package com.aliyun.ros.cdk.sls;

/**
 * Properties for defining a <code>OssExternalStore</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-ossexternalstore
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:25:00.594Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.sls.$Module.class, fqn = "@alicloud/ros-cdk-sls.OssExternalStoreProps")
@software.amazon.jsii.Jsii.Proxy(OssExternalStoreProps.Jsii$Proxy.class)
public interface OssExternalStoreProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property accessId: The AccessKey ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAccessId();

    /**
     * Property accessKey: The AccessKey secret.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAccessKey();

    /**
     * Property bucket: The name of the OSS bucket.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getBucket();

    /**
     * Property columns: The associated fields.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getColumns();

    /**
     * Property endpoint: The OSS endpoint.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getEndpoint();

    /**
     * Property externalStoreName: The name of the external store.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getExternalStoreName();

    /**
     * Property objects: The associated OSS objects.
     * <p>
     * Valid values of n: 1 to 100.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getObjects();

    /**
     * Property project: A short description of struct.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getProject();

    /**
     * Property storeType: The type of the external store.
     * <p>
     * Set the value to oss.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getStoreType();

    /**
     * @return a {@link Builder} of {@link OssExternalStoreProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link OssExternalStoreProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<OssExternalStoreProps> {
        java.lang.Object accessId;
        java.lang.Object accessKey;
        java.lang.Object bucket;
        java.lang.Object columns;
        java.lang.Object endpoint;
        java.lang.Object externalStoreName;
        java.lang.Object objects;
        java.lang.Object project;
        java.lang.Object storeType;

        /**
         * Sets the value of {@link OssExternalStoreProps#getAccessId}
         * @param accessId Property accessId: The AccessKey ID. This parameter is required.
         * @return {@code this}
         */
        public Builder accessId(java.lang.String accessId) {
            this.accessId = accessId;
            return this;
        }

        /**
         * Sets the value of {@link OssExternalStoreProps#getAccessId}
         * @param accessId Property accessId: The AccessKey ID. This parameter is required.
         * @return {@code this}
         */
        public Builder accessId(com.aliyun.ros.cdk.core.IResolvable accessId) {
            this.accessId = accessId;
            return this;
        }

        /**
         * Sets the value of {@link OssExternalStoreProps#getAccessKey}
         * @param accessKey Property accessKey: The AccessKey secret. This parameter is required.
         * @return {@code this}
         */
        public Builder accessKey(java.lang.String accessKey) {
            this.accessKey = accessKey;
            return this;
        }

        /**
         * Sets the value of {@link OssExternalStoreProps#getAccessKey}
         * @param accessKey Property accessKey: The AccessKey secret. This parameter is required.
         * @return {@code this}
         */
        public Builder accessKey(com.aliyun.ros.cdk.core.IResolvable accessKey) {
            this.accessKey = accessKey;
            return this;
        }

        /**
         * Sets the value of {@link OssExternalStoreProps#getBucket}
         * @param bucket Property bucket: The name of the OSS bucket. This parameter is required.
         * @return {@code this}
         */
        public Builder bucket(java.lang.String bucket) {
            this.bucket = bucket;
            return this;
        }

        /**
         * Sets the value of {@link OssExternalStoreProps#getBucket}
         * @param bucket Property bucket: The name of the OSS bucket. This parameter is required.
         * @return {@code this}
         */
        public Builder bucket(com.aliyun.ros.cdk.core.IResolvable bucket) {
            this.bucket = bucket;
            return this;
        }

        /**
         * Sets the value of {@link OssExternalStoreProps#getColumns}
         * @param columns Property columns: The associated fields. This parameter is required.
         * @return {@code this}
         */
        public Builder columns(com.aliyun.ros.cdk.core.IResolvable columns) {
            this.columns = columns;
            return this;
        }

        /**
         * Sets the value of {@link OssExternalStoreProps#getColumns}
         * @param columns Property columns: The associated fields. This parameter is required.
         * @return {@code this}
         */
        public Builder columns(java.util.List<? extends java.lang.Object> columns) {
            this.columns = columns;
            return this;
        }

        /**
         * Sets the value of {@link OssExternalStoreProps#getEndpoint}
         * @param endpoint Property endpoint: The OSS endpoint. This parameter is required.
         * @return {@code this}
         */
        public Builder endpoint(java.lang.String endpoint) {
            this.endpoint = endpoint;
            return this;
        }

        /**
         * Sets the value of {@link OssExternalStoreProps#getEndpoint}
         * @param endpoint Property endpoint: The OSS endpoint. This parameter is required.
         * @return {@code this}
         */
        public Builder endpoint(com.aliyun.ros.cdk.core.IResolvable endpoint) {
            this.endpoint = endpoint;
            return this;
        }

        /**
         * Sets the value of {@link OssExternalStoreProps#getExternalStoreName}
         * @param externalStoreName Property externalStoreName: The name of the external store. This parameter is required.
         * @return {@code this}
         */
        public Builder externalStoreName(java.lang.String externalStoreName) {
            this.externalStoreName = externalStoreName;
            return this;
        }

        /**
         * Sets the value of {@link OssExternalStoreProps#getExternalStoreName}
         * @param externalStoreName Property externalStoreName: The name of the external store. This parameter is required.
         * @return {@code this}
         */
        public Builder externalStoreName(com.aliyun.ros.cdk.core.IResolvable externalStoreName) {
            this.externalStoreName = externalStoreName;
            return this;
        }

        /**
         * Sets the value of {@link OssExternalStoreProps#getObjects}
         * @param objects Property objects: The associated OSS objects. This parameter is required.
         *                Valid values of n: 1 to 100.
         * @return {@code this}
         */
        public Builder objects(com.aliyun.ros.cdk.core.IResolvable objects) {
            this.objects = objects;
            return this;
        }

        /**
         * Sets the value of {@link OssExternalStoreProps#getObjects}
         * @param objects Property objects: The associated OSS objects. This parameter is required.
         *                Valid values of n: 1 to 100.
         * @return {@code this}
         */
        public Builder objects(java.util.List<? extends java.lang.Object> objects) {
            this.objects = objects;
            return this;
        }

        /**
         * Sets the value of {@link OssExternalStoreProps#getProject}
         * @param project Property project: A short description of struct. This parameter is required.
         * @return {@code this}
         */
        public Builder project(java.lang.String project) {
            this.project = project;
            return this;
        }

        /**
         * Sets the value of {@link OssExternalStoreProps#getProject}
         * @param project Property project: A short description of struct. This parameter is required.
         * @return {@code this}
         */
        public Builder project(com.aliyun.ros.cdk.core.IResolvable project) {
            this.project = project;
            return this;
        }

        /**
         * Sets the value of {@link OssExternalStoreProps#getStoreType}
         * @param storeType Property storeType: The type of the external store. This parameter is required.
         *                  Set the value to oss.
         * @return {@code this}
         */
        public Builder storeType(java.lang.String storeType) {
            this.storeType = storeType;
            return this;
        }

        /**
         * Sets the value of {@link OssExternalStoreProps#getStoreType}
         * @param storeType Property storeType: The type of the external store. This parameter is required.
         *                  Set the value to oss.
         * @return {@code this}
         */
        public Builder storeType(com.aliyun.ros.cdk.core.IResolvable storeType) {
            this.storeType = storeType;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link OssExternalStoreProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public OssExternalStoreProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link OssExternalStoreProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements OssExternalStoreProps {
        private final java.lang.Object accessId;
        private final java.lang.Object accessKey;
        private final java.lang.Object bucket;
        private final java.lang.Object columns;
        private final java.lang.Object endpoint;
        private final java.lang.Object externalStoreName;
        private final java.lang.Object objects;
        private final java.lang.Object project;
        private final java.lang.Object storeType;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.accessId = software.amazon.jsii.Kernel.get(this, "accessId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.accessKey = software.amazon.jsii.Kernel.get(this, "accessKey", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.bucket = software.amazon.jsii.Kernel.get(this, "bucket", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.columns = software.amazon.jsii.Kernel.get(this, "columns", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.endpoint = software.amazon.jsii.Kernel.get(this, "endpoint", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.externalStoreName = software.amazon.jsii.Kernel.get(this, "externalStoreName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.objects = software.amazon.jsii.Kernel.get(this, "objects", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.project = software.amazon.jsii.Kernel.get(this, "project", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.storeType = software.amazon.jsii.Kernel.get(this, "storeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.accessId = java.util.Objects.requireNonNull(builder.accessId, "accessId is required");
            this.accessKey = java.util.Objects.requireNonNull(builder.accessKey, "accessKey is required");
            this.bucket = java.util.Objects.requireNonNull(builder.bucket, "bucket is required");
            this.columns = java.util.Objects.requireNonNull(builder.columns, "columns is required");
            this.endpoint = java.util.Objects.requireNonNull(builder.endpoint, "endpoint is required");
            this.externalStoreName = java.util.Objects.requireNonNull(builder.externalStoreName, "externalStoreName is required");
            this.objects = java.util.Objects.requireNonNull(builder.objects, "objects is required");
            this.project = java.util.Objects.requireNonNull(builder.project, "project is required");
            this.storeType = java.util.Objects.requireNonNull(builder.storeType, "storeType is required");
        }

        @Override
        public final java.lang.Object getAccessId() {
            return this.accessId;
        }

        @Override
        public final java.lang.Object getAccessKey() {
            return this.accessKey;
        }

        @Override
        public final java.lang.Object getBucket() {
            return this.bucket;
        }

        @Override
        public final java.lang.Object getColumns() {
            return this.columns;
        }

        @Override
        public final java.lang.Object getEndpoint() {
            return this.endpoint;
        }

        @Override
        public final java.lang.Object getExternalStoreName() {
            return this.externalStoreName;
        }

        @Override
        public final java.lang.Object getObjects() {
            return this.objects;
        }

        @Override
        public final java.lang.Object getProject() {
            return this.project;
        }

        @Override
        public final java.lang.Object getStoreType() {
            return this.storeType;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("accessId", om.valueToTree(this.getAccessId()));
            data.set("accessKey", om.valueToTree(this.getAccessKey()));
            data.set("bucket", om.valueToTree(this.getBucket()));
            data.set("columns", om.valueToTree(this.getColumns()));
            data.set("endpoint", om.valueToTree(this.getEndpoint()));
            data.set("externalStoreName", om.valueToTree(this.getExternalStoreName()));
            data.set("objects", om.valueToTree(this.getObjects()));
            data.set("project", om.valueToTree(this.getProject()));
            data.set("storeType", om.valueToTree(this.getStoreType()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-sls.OssExternalStoreProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            OssExternalStoreProps.Jsii$Proxy that = (OssExternalStoreProps.Jsii$Proxy) o;

            if (!accessId.equals(that.accessId)) return false;
            if (!accessKey.equals(that.accessKey)) return false;
            if (!bucket.equals(that.bucket)) return false;
            if (!columns.equals(that.columns)) return false;
            if (!endpoint.equals(that.endpoint)) return false;
            if (!externalStoreName.equals(that.externalStoreName)) return false;
            if (!objects.equals(that.objects)) return false;
            if (!project.equals(that.project)) return false;
            return this.storeType.equals(that.storeType);
        }

        @Override
        public final int hashCode() {
            int result = this.accessId.hashCode();
            result = 31 * result + (this.accessKey.hashCode());
            result = 31 * result + (this.bucket.hashCode());
            result = 31 * result + (this.columns.hashCode());
            result = 31 * result + (this.endpoint.hashCode());
            result = 31 * result + (this.externalStoreName.hashCode());
            result = 31 * result + (this.objects.hashCode());
            result = 31 * result + (this.project.hashCode());
            result = 31 * result + (this.storeType.hashCode());
            return result;
        }
    }
}
