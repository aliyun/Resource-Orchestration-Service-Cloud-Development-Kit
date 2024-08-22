package com.aliyun.ros.cdk.oos.datasource;

/**
 * Properties for defining a <code>RosGitCodeRepo</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-oos-gitcoderepo
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-08-22T08:56:22.736Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.oos.$Module.class, fqn = "@alicloud/ros-cdk-oos.datasource.RosGitCodeRepoProps")
@software.amazon.jsii.Jsii.Proxy(RosGitCodeRepoProps.Jsii$Proxy.class)
public interface RosGitCodeRepoProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getOwner();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPlatform();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getRepository();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCommitId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getOrganization() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRefreshOptions() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosGitCodeRepoProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosGitCodeRepoProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosGitCodeRepoProps> {
        java.lang.Object owner;
        java.lang.Object platform;
        java.lang.Object repository;
        java.lang.Object commitId;
        java.lang.Object organization;
        java.lang.Object refreshOptions;

        /**
         * Sets the value of {@link RosGitCodeRepoProps#getOwner}
         * @param owner the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder owner(java.lang.String owner) {
            this.owner = owner;
            return this;
        }

        /**
         * Sets the value of {@link RosGitCodeRepoProps#getOwner}
         * @param owner the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder owner(com.aliyun.ros.cdk.core.IResolvable owner) {
            this.owner = owner;
            return this;
        }

        /**
         * Sets the value of {@link RosGitCodeRepoProps#getPlatform}
         * @param platform the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder platform(java.lang.String platform) {
            this.platform = platform;
            return this;
        }

        /**
         * Sets the value of {@link RosGitCodeRepoProps#getPlatform}
         * @param platform the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder platform(com.aliyun.ros.cdk.core.IResolvable platform) {
            this.platform = platform;
            return this;
        }

        /**
         * Sets the value of {@link RosGitCodeRepoProps#getRepository}
         * @param repository the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder repository(java.lang.String repository) {
            this.repository = repository;
            return this;
        }

        /**
         * Sets the value of {@link RosGitCodeRepoProps#getRepository}
         * @param repository the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder repository(com.aliyun.ros.cdk.core.IResolvable repository) {
            this.repository = repository;
            return this;
        }

        /**
         * Sets the value of {@link RosGitCodeRepoProps#getCommitId}
         * @param commitId the value to be set.
         * @return {@code this}
         */
        public Builder commitId(java.lang.String commitId) {
            this.commitId = commitId;
            return this;
        }

        /**
         * Sets the value of {@link RosGitCodeRepoProps#getCommitId}
         * @param commitId the value to be set.
         * @return {@code this}
         */
        public Builder commitId(com.aliyun.ros.cdk.core.IResolvable commitId) {
            this.commitId = commitId;
            return this;
        }

        /**
         * Sets the value of {@link RosGitCodeRepoProps#getOrganization}
         * @param organization the value to be set.
         * @return {@code this}
         */
        public Builder organization(java.lang.String organization) {
            this.organization = organization;
            return this;
        }

        /**
         * Sets the value of {@link RosGitCodeRepoProps#getOrganization}
         * @param organization the value to be set.
         * @return {@code this}
         */
        public Builder organization(com.aliyun.ros.cdk.core.IResolvable organization) {
            this.organization = organization;
            return this;
        }

        /**
         * Sets the value of {@link RosGitCodeRepoProps#getRefreshOptions}
         * @param refreshOptions the value to be set.
         * @return {@code this}
         */
        public Builder refreshOptions(java.lang.String refreshOptions) {
            this.refreshOptions = refreshOptions;
            return this;
        }

        /**
         * Sets the value of {@link RosGitCodeRepoProps#getRefreshOptions}
         * @param refreshOptions the value to be set.
         * @return {@code this}
         */
        public Builder refreshOptions(com.aliyun.ros.cdk.core.IResolvable refreshOptions) {
            this.refreshOptions = refreshOptions;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosGitCodeRepoProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosGitCodeRepoProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosGitCodeRepoProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosGitCodeRepoProps {
        private final java.lang.Object owner;
        private final java.lang.Object platform;
        private final java.lang.Object repository;
        private final java.lang.Object commitId;
        private final java.lang.Object organization;
        private final java.lang.Object refreshOptions;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.owner = software.amazon.jsii.Kernel.get(this, "owner", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.platform = software.amazon.jsii.Kernel.get(this, "platform", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.repository = software.amazon.jsii.Kernel.get(this, "repository", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.commitId = software.amazon.jsii.Kernel.get(this, "commitId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.organization = software.amazon.jsii.Kernel.get(this, "organization", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.refreshOptions = software.amazon.jsii.Kernel.get(this, "refreshOptions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.owner = java.util.Objects.requireNonNull(builder.owner, "owner is required");
            this.platform = java.util.Objects.requireNonNull(builder.platform, "platform is required");
            this.repository = java.util.Objects.requireNonNull(builder.repository, "repository is required");
            this.commitId = builder.commitId;
            this.organization = builder.organization;
            this.refreshOptions = builder.refreshOptions;
        }

        @Override
        public final java.lang.Object getOwner() {
            return this.owner;
        }

        @Override
        public final java.lang.Object getPlatform() {
            return this.platform;
        }

        @Override
        public final java.lang.Object getRepository() {
            return this.repository;
        }

        @Override
        public final java.lang.Object getCommitId() {
            return this.commitId;
        }

        @Override
        public final java.lang.Object getOrganization() {
            return this.organization;
        }

        @Override
        public final java.lang.Object getRefreshOptions() {
            return this.refreshOptions;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("owner", om.valueToTree(this.getOwner()));
            data.set("platform", om.valueToTree(this.getPlatform()));
            data.set("repository", om.valueToTree(this.getRepository()));
            if (this.getCommitId() != null) {
                data.set("commitId", om.valueToTree(this.getCommitId()));
            }
            if (this.getOrganization() != null) {
                data.set("organization", om.valueToTree(this.getOrganization()));
            }
            if (this.getRefreshOptions() != null) {
                data.set("refreshOptions", om.valueToTree(this.getRefreshOptions()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-oos.datasource.RosGitCodeRepoProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosGitCodeRepoProps.Jsii$Proxy that = (RosGitCodeRepoProps.Jsii$Proxy) o;

            if (!owner.equals(that.owner)) return false;
            if (!platform.equals(that.platform)) return false;
            if (!repository.equals(that.repository)) return false;
            if (this.commitId != null ? !this.commitId.equals(that.commitId) : that.commitId != null) return false;
            if (this.organization != null ? !this.organization.equals(that.organization) : that.organization != null) return false;
            return this.refreshOptions != null ? this.refreshOptions.equals(that.refreshOptions) : that.refreshOptions == null;
        }

        @Override
        public final int hashCode() {
            int result = this.owner.hashCode();
            result = 31 * result + (this.platform.hashCode());
            result = 31 * result + (this.repository.hashCode());
            result = 31 * result + (this.commitId != null ? this.commitId.hashCode() : 0);
            result = 31 * result + (this.organization != null ? this.organization.hashCode() : 0);
            result = 31 * result + (this.refreshOptions != null ? this.refreshOptions.hashCode() : 0);
            return result;
        }
    }
}
