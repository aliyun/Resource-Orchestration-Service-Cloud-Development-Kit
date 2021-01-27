package com.aliyun.ros.cdk.hbr;

/**
 * Properties for defining a `ALIYUN::HBR::RestoreJob`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-01-26T09:47:34.023Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.hbr.$Module.class, fqn = "@alicloud/ros-cdk-hbr.RestoreJobProps")
@software.amazon.jsii.Jsii.Proxy(RestoreJobProps.Jsii$Proxy.class)
public interface RestoreJobProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getRestoreType();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getSnapshotId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getSourceClientId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getSourceInstanceId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getSourceType();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getTargetClientId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getTargetInstanceId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getTargetPath();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getVaultId();

    /**
     * @return a {@link Builder} of {@link RestoreJobProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RestoreJobProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RestoreJobProps> {
        private java.lang.String restoreType;
        private java.lang.String snapshotId;
        private java.lang.String sourceClientId;
        private java.lang.String sourceInstanceId;
        private java.lang.String sourceType;
        private java.lang.String targetClientId;
        private java.lang.String targetInstanceId;
        private java.lang.String targetPath;
        private java.lang.String vaultId;

        /**
         * Sets the value of {@link RestoreJobProps#getRestoreType}
         * @param restoreType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder restoreType(java.lang.String restoreType) {
            this.restoreType = restoreType;
            return this;
        }

        /**
         * Sets the value of {@link RestoreJobProps#getSnapshotId}
         * @param snapshotId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder snapshotId(java.lang.String snapshotId) {
            this.snapshotId = snapshotId;
            return this;
        }

        /**
         * Sets the value of {@link RestoreJobProps#getSourceClientId}
         * @param sourceClientId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder sourceClientId(java.lang.String sourceClientId) {
            this.sourceClientId = sourceClientId;
            return this;
        }

        /**
         * Sets the value of {@link RestoreJobProps#getSourceInstanceId}
         * @param sourceInstanceId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder sourceInstanceId(java.lang.String sourceInstanceId) {
            this.sourceInstanceId = sourceInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link RestoreJobProps#getSourceType}
         * @param sourceType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder sourceType(java.lang.String sourceType) {
            this.sourceType = sourceType;
            return this;
        }

        /**
         * Sets the value of {@link RestoreJobProps#getTargetClientId}
         * @param targetClientId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder targetClientId(java.lang.String targetClientId) {
            this.targetClientId = targetClientId;
            return this;
        }

        /**
         * Sets the value of {@link RestoreJobProps#getTargetInstanceId}
         * @param targetInstanceId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder targetInstanceId(java.lang.String targetInstanceId) {
            this.targetInstanceId = targetInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link RestoreJobProps#getTargetPath}
         * @param targetPath the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder targetPath(java.lang.String targetPath) {
            this.targetPath = targetPath;
            return this;
        }

        /**
         * Sets the value of {@link RestoreJobProps#getVaultId}
         * @param vaultId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder vaultId(java.lang.String vaultId) {
            this.vaultId = vaultId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RestoreJobProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RestoreJobProps build() {
            return new Jsii$Proxy(restoreType, snapshotId, sourceClientId, sourceInstanceId, sourceType, targetClientId, targetInstanceId, targetPath, vaultId);
        }
    }

    /**
     * An implementation for {@link RestoreJobProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RestoreJobProps {
        private final java.lang.String restoreType;
        private final java.lang.String snapshotId;
        private final java.lang.String sourceClientId;
        private final java.lang.String sourceInstanceId;
        private final java.lang.String sourceType;
        private final java.lang.String targetClientId;
        private final java.lang.String targetInstanceId;
        private final java.lang.String targetPath;
        private final java.lang.String vaultId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.restoreType = software.amazon.jsii.Kernel.get(this, "restoreType", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.snapshotId = software.amazon.jsii.Kernel.get(this, "snapshotId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.sourceClientId = software.amazon.jsii.Kernel.get(this, "sourceClientId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.sourceInstanceId = software.amazon.jsii.Kernel.get(this, "sourceInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.sourceType = software.amazon.jsii.Kernel.get(this, "sourceType", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.targetClientId = software.amazon.jsii.Kernel.get(this, "targetClientId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.targetInstanceId = software.amazon.jsii.Kernel.get(this, "targetInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.targetPath = software.amazon.jsii.Kernel.get(this, "targetPath", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.vaultId = software.amazon.jsii.Kernel.get(this, "vaultId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final java.lang.String restoreType, final java.lang.String snapshotId, final java.lang.String sourceClientId, final java.lang.String sourceInstanceId, final java.lang.String sourceType, final java.lang.String targetClientId, final java.lang.String targetInstanceId, final java.lang.String targetPath, final java.lang.String vaultId) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.restoreType = java.util.Objects.requireNonNull(restoreType, "restoreType is required");
            this.snapshotId = java.util.Objects.requireNonNull(snapshotId, "snapshotId is required");
            this.sourceClientId = java.util.Objects.requireNonNull(sourceClientId, "sourceClientId is required");
            this.sourceInstanceId = java.util.Objects.requireNonNull(sourceInstanceId, "sourceInstanceId is required");
            this.sourceType = java.util.Objects.requireNonNull(sourceType, "sourceType is required");
            this.targetClientId = java.util.Objects.requireNonNull(targetClientId, "targetClientId is required");
            this.targetInstanceId = java.util.Objects.requireNonNull(targetInstanceId, "targetInstanceId is required");
            this.targetPath = java.util.Objects.requireNonNull(targetPath, "targetPath is required");
            this.vaultId = java.util.Objects.requireNonNull(vaultId, "vaultId is required");
        }

        @Override
        public final java.lang.String getRestoreType() {
            return this.restoreType;
        }

        @Override
        public final java.lang.String getSnapshotId() {
            return this.snapshotId;
        }

        @Override
        public final java.lang.String getSourceClientId() {
            return this.sourceClientId;
        }

        @Override
        public final java.lang.String getSourceInstanceId() {
            return this.sourceInstanceId;
        }

        @Override
        public final java.lang.String getSourceType() {
            return this.sourceType;
        }

        @Override
        public final java.lang.String getTargetClientId() {
            return this.targetClientId;
        }

        @Override
        public final java.lang.String getTargetInstanceId() {
            return this.targetInstanceId;
        }

        @Override
        public final java.lang.String getTargetPath() {
            return this.targetPath;
        }

        @Override
        public final java.lang.String getVaultId() {
            return this.vaultId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("restoreType", om.valueToTree(this.getRestoreType()));
            data.set("snapshotId", om.valueToTree(this.getSnapshotId()));
            data.set("sourceClientId", om.valueToTree(this.getSourceClientId()));
            data.set("sourceInstanceId", om.valueToTree(this.getSourceInstanceId()));
            data.set("sourceType", om.valueToTree(this.getSourceType()));
            data.set("targetClientId", om.valueToTree(this.getTargetClientId()));
            data.set("targetInstanceId", om.valueToTree(this.getTargetInstanceId()));
            data.set("targetPath", om.valueToTree(this.getTargetPath()));
            data.set("vaultId", om.valueToTree(this.getVaultId()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-hbr.RestoreJobProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RestoreJobProps.Jsii$Proxy that = (RestoreJobProps.Jsii$Proxy) o;

            if (!restoreType.equals(that.restoreType)) return false;
            if (!snapshotId.equals(that.snapshotId)) return false;
            if (!sourceClientId.equals(that.sourceClientId)) return false;
            if (!sourceInstanceId.equals(that.sourceInstanceId)) return false;
            if (!sourceType.equals(that.sourceType)) return false;
            if (!targetClientId.equals(that.targetClientId)) return false;
            if (!targetInstanceId.equals(that.targetInstanceId)) return false;
            if (!targetPath.equals(that.targetPath)) return false;
            return this.vaultId.equals(that.vaultId);
        }

        @Override
        public final int hashCode() {
            int result = this.restoreType.hashCode();
            result = 31 * result + (this.snapshotId.hashCode());
            result = 31 * result + (this.sourceClientId.hashCode());
            result = 31 * result + (this.sourceInstanceId.hashCode());
            result = 31 * result + (this.sourceType.hashCode());
            result = 31 * result + (this.targetClientId.hashCode());
            result = 31 * result + (this.targetInstanceId.hashCode());
            result = 31 * result + (this.targetPath.hashCode());
            result = 31 * result + (this.vaultId.hashCode());
            return result;
        }
    }
}
