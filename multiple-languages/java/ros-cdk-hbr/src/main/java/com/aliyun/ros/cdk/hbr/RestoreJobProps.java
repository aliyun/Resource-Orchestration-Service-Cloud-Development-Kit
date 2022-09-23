package com.aliyun.ros.cdk.hbr;

/**
 * Properties for defining a `ALIYUN::HBR::RestoreJob`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.68.0 (build b45f2f6)", date = "2022-09-23T09:09:10.762Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.hbr.$Module.class, fqn = "@alicloud/ros-cdk-hbr.RestoreJobProps")
@software.amazon.jsii.Jsii.Proxy(RestoreJobProps.Jsii$Proxy.class)
public interface RestoreJobProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property restoreType: Restore type.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getRestoreType();

    /**
     * Property snapshotId: Snapshot ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSnapshotId();

    /**
     * Property sourceClientId: Source client ID.
     * <p>
     * It should be provided when SourceType=FILE.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSourceClientId();

    /**
     * Property sourceInstanceId: Source instance ID.
     * <p>
     * It should be provided when SourceType=ECS_FILE.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSourceInstanceId();

    /**
     * Property sourceType: Source type.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSourceType();

    /**
     * Property targetClientId: Target client ID.
     * <p>
     * It should be provided when RestoreType=FILE.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getTargetClientId();

    /**
     * Property targetInstanceId: Target instance ID.
     * <p>
     * It should be provided when RestoreType=ECS_FILE.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getTargetInstanceId();

    /**
     * Property targetPath: Target path.
     * <p>
     * For instance, "/".
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getTargetPath();

    /**
     * Property vaultId: Vault ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getVaultId();

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
        java.lang.Object restoreType;
        java.lang.Object snapshotId;
        java.lang.Object sourceClientId;
        java.lang.Object sourceInstanceId;
        java.lang.Object sourceType;
        java.lang.Object targetClientId;
        java.lang.Object targetInstanceId;
        java.lang.Object targetPath;
        java.lang.Object vaultId;

        /**
         * Sets the value of {@link RestoreJobProps#getRestoreType}
         * @param restoreType Property restoreType: Restore type. This parameter is required.
         * @return {@code this}
         */
        public Builder restoreType(java.lang.String restoreType) {
            this.restoreType = restoreType;
            return this;
        }

        /**
         * Sets the value of {@link RestoreJobProps#getRestoreType}
         * @param restoreType Property restoreType: Restore type. This parameter is required.
         * @return {@code this}
         */
        public Builder restoreType(com.aliyun.ros.cdk.core.IResolvable restoreType) {
            this.restoreType = restoreType;
            return this;
        }

        /**
         * Sets the value of {@link RestoreJobProps#getSnapshotId}
         * @param snapshotId Property snapshotId: Snapshot ID. This parameter is required.
         * @return {@code this}
         */
        public Builder snapshotId(java.lang.String snapshotId) {
            this.snapshotId = snapshotId;
            return this;
        }

        /**
         * Sets the value of {@link RestoreJobProps#getSnapshotId}
         * @param snapshotId Property snapshotId: Snapshot ID. This parameter is required.
         * @return {@code this}
         */
        public Builder snapshotId(com.aliyun.ros.cdk.core.IResolvable snapshotId) {
            this.snapshotId = snapshotId;
            return this;
        }

        /**
         * Sets the value of {@link RestoreJobProps#getSourceClientId}
         * @param sourceClientId Property sourceClientId: Source client ID. This parameter is required.
         *                       It should be provided when SourceType=FILE.
         * @return {@code this}
         */
        public Builder sourceClientId(java.lang.String sourceClientId) {
            this.sourceClientId = sourceClientId;
            return this;
        }

        /**
         * Sets the value of {@link RestoreJobProps#getSourceClientId}
         * @param sourceClientId Property sourceClientId: Source client ID. This parameter is required.
         *                       It should be provided when SourceType=FILE.
         * @return {@code this}
         */
        public Builder sourceClientId(com.aliyun.ros.cdk.core.IResolvable sourceClientId) {
            this.sourceClientId = sourceClientId;
            return this;
        }

        /**
         * Sets the value of {@link RestoreJobProps#getSourceInstanceId}
         * @param sourceInstanceId Property sourceInstanceId: Source instance ID. This parameter is required.
         *                         It should be provided when SourceType=ECS_FILE.
         * @return {@code this}
         */
        public Builder sourceInstanceId(java.lang.String sourceInstanceId) {
            this.sourceInstanceId = sourceInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link RestoreJobProps#getSourceInstanceId}
         * @param sourceInstanceId Property sourceInstanceId: Source instance ID. This parameter is required.
         *                         It should be provided when SourceType=ECS_FILE.
         * @return {@code this}
         */
        public Builder sourceInstanceId(com.aliyun.ros.cdk.core.IResolvable sourceInstanceId) {
            this.sourceInstanceId = sourceInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link RestoreJobProps#getSourceType}
         * @param sourceType Property sourceType: Source type. This parameter is required.
         * @return {@code this}
         */
        public Builder sourceType(java.lang.String sourceType) {
            this.sourceType = sourceType;
            return this;
        }

        /**
         * Sets the value of {@link RestoreJobProps#getSourceType}
         * @param sourceType Property sourceType: Source type. This parameter is required.
         * @return {@code this}
         */
        public Builder sourceType(com.aliyun.ros.cdk.core.IResolvable sourceType) {
            this.sourceType = sourceType;
            return this;
        }

        /**
         * Sets the value of {@link RestoreJobProps#getTargetClientId}
         * @param targetClientId Property targetClientId: Target client ID. This parameter is required.
         *                       It should be provided when RestoreType=FILE.
         * @return {@code this}
         */
        public Builder targetClientId(java.lang.String targetClientId) {
            this.targetClientId = targetClientId;
            return this;
        }

        /**
         * Sets the value of {@link RestoreJobProps#getTargetClientId}
         * @param targetClientId Property targetClientId: Target client ID. This parameter is required.
         *                       It should be provided when RestoreType=FILE.
         * @return {@code this}
         */
        public Builder targetClientId(com.aliyun.ros.cdk.core.IResolvable targetClientId) {
            this.targetClientId = targetClientId;
            return this;
        }

        /**
         * Sets the value of {@link RestoreJobProps#getTargetInstanceId}
         * @param targetInstanceId Property targetInstanceId: Target instance ID. This parameter is required.
         *                         It should be provided when RestoreType=ECS_FILE.
         * @return {@code this}
         */
        public Builder targetInstanceId(java.lang.String targetInstanceId) {
            this.targetInstanceId = targetInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link RestoreJobProps#getTargetInstanceId}
         * @param targetInstanceId Property targetInstanceId: Target instance ID. This parameter is required.
         *                         It should be provided when RestoreType=ECS_FILE.
         * @return {@code this}
         */
        public Builder targetInstanceId(com.aliyun.ros.cdk.core.IResolvable targetInstanceId) {
            this.targetInstanceId = targetInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link RestoreJobProps#getTargetPath}
         * @param targetPath Property targetPath: Target path. This parameter is required.
         *                   For instance, "/".
         * @return {@code this}
         */
        public Builder targetPath(java.lang.String targetPath) {
            this.targetPath = targetPath;
            return this;
        }

        /**
         * Sets the value of {@link RestoreJobProps#getTargetPath}
         * @param targetPath Property targetPath: Target path. This parameter is required.
         *                   For instance, "/".
         * @return {@code this}
         */
        public Builder targetPath(com.aliyun.ros.cdk.core.IResolvable targetPath) {
            this.targetPath = targetPath;
            return this;
        }

        /**
         * Sets the value of {@link RestoreJobProps#getVaultId}
         * @param vaultId Property vaultId: Vault ID. This parameter is required.
         * @return {@code this}
         */
        public Builder vaultId(java.lang.String vaultId) {
            this.vaultId = vaultId;
            return this;
        }

        /**
         * Sets the value of {@link RestoreJobProps#getVaultId}
         * @param vaultId Property vaultId: Vault ID. This parameter is required.
         * @return {@code this}
         */
        public Builder vaultId(com.aliyun.ros.cdk.core.IResolvable vaultId) {
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
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RestoreJobProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RestoreJobProps {
        private final java.lang.Object restoreType;
        private final java.lang.Object snapshotId;
        private final java.lang.Object sourceClientId;
        private final java.lang.Object sourceInstanceId;
        private final java.lang.Object sourceType;
        private final java.lang.Object targetClientId;
        private final java.lang.Object targetInstanceId;
        private final java.lang.Object targetPath;
        private final java.lang.Object vaultId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.restoreType = software.amazon.jsii.Kernel.get(this, "restoreType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.snapshotId = software.amazon.jsii.Kernel.get(this, "snapshotId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.sourceClientId = software.amazon.jsii.Kernel.get(this, "sourceClientId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.sourceInstanceId = software.amazon.jsii.Kernel.get(this, "sourceInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.sourceType = software.amazon.jsii.Kernel.get(this, "sourceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.targetClientId = software.amazon.jsii.Kernel.get(this, "targetClientId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.targetInstanceId = software.amazon.jsii.Kernel.get(this, "targetInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.targetPath = software.amazon.jsii.Kernel.get(this, "targetPath", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vaultId = software.amazon.jsii.Kernel.get(this, "vaultId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.restoreType = java.util.Objects.requireNonNull(builder.restoreType, "restoreType is required");
            this.snapshotId = java.util.Objects.requireNonNull(builder.snapshotId, "snapshotId is required");
            this.sourceClientId = java.util.Objects.requireNonNull(builder.sourceClientId, "sourceClientId is required");
            this.sourceInstanceId = java.util.Objects.requireNonNull(builder.sourceInstanceId, "sourceInstanceId is required");
            this.sourceType = java.util.Objects.requireNonNull(builder.sourceType, "sourceType is required");
            this.targetClientId = java.util.Objects.requireNonNull(builder.targetClientId, "targetClientId is required");
            this.targetInstanceId = java.util.Objects.requireNonNull(builder.targetInstanceId, "targetInstanceId is required");
            this.targetPath = java.util.Objects.requireNonNull(builder.targetPath, "targetPath is required");
            this.vaultId = java.util.Objects.requireNonNull(builder.vaultId, "vaultId is required");
        }

        @Override
        public final java.lang.Object getRestoreType() {
            return this.restoreType;
        }

        @Override
        public final java.lang.Object getSnapshotId() {
            return this.snapshotId;
        }

        @Override
        public final java.lang.Object getSourceClientId() {
            return this.sourceClientId;
        }

        @Override
        public final java.lang.Object getSourceInstanceId() {
            return this.sourceInstanceId;
        }

        @Override
        public final java.lang.Object getSourceType() {
            return this.sourceType;
        }

        @Override
        public final java.lang.Object getTargetClientId() {
            return this.targetClientId;
        }

        @Override
        public final java.lang.Object getTargetInstanceId() {
            return this.targetInstanceId;
        }

        @Override
        public final java.lang.Object getTargetPath() {
            return this.targetPath;
        }

        @Override
        public final java.lang.Object getVaultId() {
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
