package com.aliyun.ros.cdk.resourcemanager;

/**
 * Properties for defining a `ALIYUN::ResourceManager::Folder`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.63.2 (build a8a8833)", date = "2022-08-05T07:29:05.376Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.resourcemanager.$Module.class, fqn = "@alicloud/ros-cdk-resourcemanager.RosFolderProps")
@software.amazon.jsii.Jsii.Proxy(RosFolderProps.Jsii$Proxy.class)
public interface RosFolderProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getFolderName();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getParentFolderId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosFolderProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosFolderProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosFolderProps> {
        java.lang.Object folderName;
        java.lang.Object parentFolderId;

        /**
         * Sets the value of {@link RosFolderProps#getFolderName}
         * @param folderName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder folderName(java.lang.String folderName) {
            this.folderName = folderName;
            return this;
        }

        /**
         * Sets the value of {@link RosFolderProps#getFolderName}
         * @param folderName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder folderName(com.aliyun.ros.cdk.core.IResolvable folderName) {
            this.folderName = folderName;
            return this;
        }

        /**
         * Sets the value of {@link RosFolderProps#getParentFolderId}
         * @param parentFolderId the value to be set.
         * @return {@code this}
         */
        public Builder parentFolderId(java.lang.String parentFolderId) {
            this.parentFolderId = parentFolderId;
            return this;
        }

        /**
         * Sets the value of {@link RosFolderProps#getParentFolderId}
         * @param parentFolderId the value to be set.
         * @return {@code this}
         */
        public Builder parentFolderId(com.aliyun.ros.cdk.core.IResolvable parentFolderId) {
            this.parentFolderId = parentFolderId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosFolderProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosFolderProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosFolderProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosFolderProps {
        private final java.lang.Object folderName;
        private final java.lang.Object parentFolderId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.folderName = software.amazon.jsii.Kernel.get(this, "folderName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.parentFolderId = software.amazon.jsii.Kernel.get(this, "parentFolderId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.folderName = java.util.Objects.requireNonNull(builder.folderName, "folderName is required");
            this.parentFolderId = builder.parentFolderId;
        }

        @Override
        public final java.lang.Object getFolderName() {
            return this.folderName;
        }

        @Override
        public final java.lang.Object getParentFolderId() {
            return this.parentFolderId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("folderName", om.valueToTree(this.getFolderName()));
            if (this.getParentFolderId() != null) {
                data.set("parentFolderId", om.valueToTree(this.getParentFolderId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-resourcemanager.RosFolderProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosFolderProps.Jsii$Proxy that = (RosFolderProps.Jsii$Proxy) o;

            if (!folderName.equals(that.folderName)) return false;
            return this.parentFolderId != null ? this.parentFolderId.equals(that.parentFolderId) : that.parentFolderId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.folderName.hashCode();
            result = 31 * result + (this.parentFolderId != null ? this.parentFolderId.hashCode() : 0);
            return result;
        }
    }
}
