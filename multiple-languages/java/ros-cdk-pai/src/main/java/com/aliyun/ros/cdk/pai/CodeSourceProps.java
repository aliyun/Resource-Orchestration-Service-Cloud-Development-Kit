package com.aliyun.ros.cdk.pai;

/**
 * Properties for defining a <code>CodeSource</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-codesource
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-09-28T10:11:27.485Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.pai.$Module.class, fqn = "@alicloud/ros-cdk-pai.CodeSourceProps")
@software.amazon.jsii.Jsii.Proxy(CodeSourceProps.Jsii$Proxy.class)
public interface CodeSourceProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property accessibility: Visibility of the code configuration, possible values: - PRIVATE: In this workspace, it is only visible to you and the administrator.
     * <p>
     * <ul>
     * <li>PUBLIC: In this workspace, it is visible to everyone.</li>
     * </ul>
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAccessibility();

    /**
     * Property codeRepo: Code repository address.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getCodeRepo();

    /**
     * Property displayName: Code source configuration name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDisplayName();

    /**
     * Property mountPath: The local Mount Directory of the code.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getMountPath();

    /**
     * Property workspaceId: The ID of the workspace.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getWorkspaceId();

    /**
     * Property codeBranch: Code repository branch.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCodeBranch() {
        return null;
    }

    /**
     * Property codeCommit: The code CommitId.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCodeCommit() {
        return null;
    }

    /**
     * Property codeRepoAccessToken: The Token used to access the code repository.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCodeRepoAccessToken() {
        return null;
    }

    /**
     * Property codeRepoUserName: The user name of the code repository.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCodeRepoUserName() {
        return null;
    }

    /**
     * Property description: A detailed description of the code configuration.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link CodeSourceProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link CodeSourceProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<CodeSourceProps> {
        java.lang.Object accessibility;
        java.lang.Object codeRepo;
        java.lang.Object displayName;
        java.lang.Object mountPath;
        java.lang.Object workspaceId;
        java.lang.Object codeBranch;
        java.lang.Object codeCommit;
        java.lang.Object codeRepoAccessToken;
        java.lang.Object codeRepoUserName;
        java.lang.Object description;

        /**
         * Sets the value of {@link CodeSourceProps#getAccessibility}
         * @param accessibility Property accessibility: Visibility of the code configuration, possible values: - PRIVATE: In this workspace, it is only visible to you and the administrator. This parameter is required.
         *                      <ul>
         *                      <li>PUBLIC: In this workspace, it is visible to everyone.</li>
         *                      </ul>
         * @return {@code this}
         */
        public Builder accessibility(java.lang.String accessibility) {
            this.accessibility = accessibility;
            return this;
        }

        /**
         * Sets the value of {@link CodeSourceProps#getAccessibility}
         * @param accessibility Property accessibility: Visibility of the code configuration, possible values: - PRIVATE: In this workspace, it is only visible to you and the administrator. This parameter is required.
         *                      <ul>
         *                      <li>PUBLIC: In this workspace, it is visible to everyone.</li>
         *                      </ul>
         * @return {@code this}
         */
        public Builder accessibility(com.aliyun.ros.cdk.core.IResolvable accessibility) {
            this.accessibility = accessibility;
            return this;
        }

        /**
         * Sets the value of {@link CodeSourceProps#getCodeRepo}
         * @param codeRepo Property codeRepo: Code repository address. This parameter is required.
         * @return {@code this}
         */
        public Builder codeRepo(java.lang.String codeRepo) {
            this.codeRepo = codeRepo;
            return this;
        }

        /**
         * Sets the value of {@link CodeSourceProps#getCodeRepo}
         * @param codeRepo Property codeRepo: Code repository address. This parameter is required.
         * @return {@code this}
         */
        public Builder codeRepo(com.aliyun.ros.cdk.core.IResolvable codeRepo) {
            this.codeRepo = codeRepo;
            return this;
        }

        /**
         * Sets the value of {@link CodeSourceProps#getDisplayName}
         * @param displayName Property displayName: Code source configuration name. This parameter is required.
         * @return {@code this}
         */
        public Builder displayName(java.lang.String displayName) {
            this.displayName = displayName;
            return this;
        }

        /**
         * Sets the value of {@link CodeSourceProps#getDisplayName}
         * @param displayName Property displayName: Code source configuration name. This parameter is required.
         * @return {@code this}
         */
        public Builder displayName(com.aliyun.ros.cdk.core.IResolvable displayName) {
            this.displayName = displayName;
            return this;
        }

        /**
         * Sets the value of {@link CodeSourceProps#getMountPath}
         * @param mountPath Property mountPath: The local Mount Directory of the code. This parameter is required.
         * @return {@code this}
         */
        public Builder mountPath(java.lang.String mountPath) {
            this.mountPath = mountPath;
            return this;
        }

        /**
         * Sets the value of {@link CodeSourceProps#getMountPath}
         * @param mountPath Property mountPath: The local Mount Directory of the code. This parameter is required.
         * @return {@code this}
         */
        public Builder mountPath(com.aliyun.ros.cdk.core.IResolvable mountPath) {
            this.mountPath = mountPath;
            return this;
        }

        /**
         * Sets the value of {@link CodeSourceProps#getWorkspaceId}
         * @param workspaceId Property workspaceId: The ID of the workspace. This parameter is required.
         * @return {@code this}
         */
        public Builder workspaceId(java.lang.String workspaceId) {
            this.workspaceId = workspaceId;
            return this;
        }

        /**
         * Sets the value of {@link CodeSourceProps#getWorkspaceId}
         * @param workspaceId Property workspaceId: The ID of the workspace. This parameter is required.
         * @return {@code this}
         */
        public Builder workspaceId(com.aliyun.ros.cdk.core.IResolvable workspaceId) {
            this.workspaceId = workspaceId;
            return this;
        }

        /**
         * Sets the value of {@link CodeSourceProps#getCodeBranch}
         * @param codeBranch Property codeBranch: Code repository branch.
         * @return {@code this}
         */
        public Builder codeBranch(java.lang.String codeBranch) {
            this.codeBranch = codeBranch;
            return this;
        }

        /**
         * Sets the value of {@link CodeSourceProps#getCodeBranch}
         * @param codeBranch Property codeBranch: Code repository branch.
         * @return {@code this}
         */
        public Builder codeBranch(com.aliyun.ros.cdk.core.IResolvable codeBranch) {
            this.codeBranch = codeBranch;
            return this;
        }

        /**
         * Sets the value of {@link CodeSourceProps#getCodeCommit}
         * @param codeCommit Property codeCommit: The code CommitId.
         * @return {@code this}
         */
        public Builder codeCommit(java.lang.String codeCommit) {
            this.codeCommit = codeCommit;
            return this;
        }

        /**
         * Sets the value of {@link CodeSourceProps#getCodeCommit}
         * @param codeCommit Property codeCommit: The code CommitId.
         * @return {@code this}
         */
        public Builder codeCommit(com.aliyun.ros.cdk.core.IResolvable codeCommit) {
            this.codeCommit = codeCommit;
            return this;
        }

        /**
         * Sets the value of {@link CodeSourceProps#getCodeRepoAccessToken}
         * @param codeRepoAccessToken Property codeRepoAccessToken: The Token used to access the code repository.
         * @return {@code this}
         */
        public Builder codeRepoAccessToken(java.lang.String codeRepoAccessToken) {
            this.codeRepoAccessToken = codeRepoAccessToken;
            return this;
        }

        /**
         * Sets the value of {@link CodeSourceProps#getCodeRepoAccessToken}
         * @param codeRepoAccessToken Property codeRepoAccessToken: The Token used to access the code repository.
         * @return {@code this}
         */
        public Builder codeRepoAccessToken(com.aliyun.ros.cdk.core.IResolvable codeRepoAccessToken) {
            this.codeRepoAccessToken = codeRepoAccessToken;
            return this;
        }

        /**
         * Sets the value of {@link CodeSourceProps#getCodeRepoUserName}
         * @param codeRepoUserName Property codeRepoUserName: The user name of the code repository.
         * @return {@code this}
         */
        public Builder codeRepoUserName(java.lang.String codeRepoUserName) {
            this.codeRepoUserName = codeRepoUserName;
            return this;
        }

        /**
         * Sets the value of {@link CodeSourceProps#getCodeRepoUserName}
         * @param codeRepoUserName Property codeRepoUserName: The user name of the code repository.
         * @return {@code this}
         */
        public Builder codeRepoUserName(com.aliyun.ros.cdk.core.IResolvable codeRepoUserName) {
            this.codeRepoUserName = codeRepoUserName;
            return this;
        }

        /**
         * Sets the value of {@link CodeSourceProps#getDescription}
         * @param description Property description: A detailed description of the code configuration.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link CodeSourceProps#getDescription}
         * @param description Property description: A detailed description of the code configuration.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link CodeSourceProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public CodeSourceProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link CodeSourceProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements CodeSourceProps {
        private final java.lang.Object accessibility;
        private final java.lang.Object codeRepo;
        private final java.lang.Object displayName;
        private final java.lang.Object mountPath;
        private final java.lang.Object workspaceId;
        private final java.lang.Object codeBranch;
        private final java.lang.Object codeCommit;
        private final java.lang.Object codeRepoAccessToken;
        private final java.lang.Object codeRepoUserName;
        private final java.lang.Object description;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.accessibility = software.amazon.jsii.Kernel.get(this, "accessibility", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.codeRepo = software.amazon.jsii.Kernel.get(this, "codeRepo", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.displayName = software.amazon.jsii.Kernel.get(this, "displayName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.mountPath = software.amazon.jsii.Kernel.get(this, "mountPath", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.workspaceId = software.amazon.jsii.Kernel.get(this, "workspaceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.codeBranch = software.amazon.jsii.Kernel.get(this, "codeBranch", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.codeCommit = software.amazon.jsii.Kernel.get(this, "codeCommit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.codeRepoAccessToken = software.amazon.jsii.Kernel.get(this, "codeRepoAccessToken", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.codeRepoUserName = software.amazon.jsii.Kernel.get(this, "codeRepoUserName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.accessibility = java.util.Objects.requireNonNull(builder.accessibility, "accessibility is required");
            this.codeRepo = java.util.Objects.requireNonNull(builder.codeRepo, "codeRepo is required");
            this.displayName = java.util.Objects.requireNonNull(builder.displayName, "displayName is required");
            this.mountPath = java.util.Objects.requireNonNull(builder.mountPath, "mountPath is required");
            this.workspaceId = java.util.Objects.requireNonNull(builder.workspaceId, "workspaceId is required");
            this.codeBranch = builder.codeBranch;
            this.codeCommit = builder.codeCommit;
            this.codeRepoAccessToken = builder.codeRepoAccessToken;
            this.codeRepoUserName = builder.codeRepoUserName;
            this.description = builder.description;
        }

        @Override
        public final java.lang.Object getAccessibility() {
            return this.accessibility;
        }

        @Override
        public final java.lang.Object getCodeRepo() {
            return this.codeRepo;
        }

        @Override
        public final java.lang.Object getDisplayName() {
            return this.displayName;
        }

        @Override
        public final java.lang.Object getMountPath() {
            return this.mountPath;
        }

        @Override
        public final java.lang.Object getWorkspaceId() {
            return this.workspaceId;
        }

        @Override
        public final java.lang.Object getCodeBranch() {
            return this.codeBranch;
        }

        @Override
        public final java.lang.Object getCodeCommit() {
            return this.codeCommit;
        }

        @Override
        public final java.lang.Object getCodeRepoAccessToken() {
            return this.codeRepoAccessToken;
        }

        @Override
        public final java.lang.Object getCodeRepoUserName() {
            return this.codeRepoUserName;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("accessibility", om.valueToTree(this.getAccessibility()));
            data.set("codeRepo", om.valueToTree(this.getCodeRepo()));
            data.set("displayName", om.valueToTree(this.getDisplayName()));
            data.set("mountPath", om.valueToTree(this.getMountPath()));
            data.set("workspaceId", om.valueToTree(this.getWorkspaceId()));
            if (this.getCodeBranch() != null) {
                data.set("codeBranch", om.valueToTree(this.getCodeBranch()));
            }
            if (this.getCodeCommit() != null) {
                data.set("codeCommit", om.valueToTree(this.getCodeCommit()));
            }
            if (this.getCodeRepoAccessToken() != null) {
                data.set("codeRepoAccessToken", om.valueToTree(this.getCodeRepoAccessToken()));
            }
            if (this.getCodeRepoUserName() != null) {
                data.set("codeRepoUserName", om.valueToTree(this.getCodeRepoUserName()));
            }
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-pai.CodeSourceProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            CodeSourceProps.Jsii$Proxy that = (CodeSourceProps.Jsii$Proxy) o;

            if (!accessibility.equals(that.accessibility)) return false;
            if (!codeRepo.equals(that.codeRepo)) return false;
            if (!displayName.equals(that.displayName)) return false;
            if (!mountPath.equals(that.mountPath)) return false;
            if (!workspaceId.equals(that.workspaceId)) return false;
            if (this.codeBranch != null ? !this.codeBranch.equals(that.codeBranch) : that.codeBranch != null) return false;
            if (this.codeCommit != null ? !this.codeCommit.equals(that.codeCommit) : that.codeCommit != null) return false;
            if (this.codeRepoAccessToken != null ? !this.codeRepoAccessToken.equals(that.codeRepoAccessToken) : that.codeRepoAccessToken != null) return false;
            if (this.codeRepoUserName != null ? !this.codeRepoUserName.equals(that.codeRepoUserName) : that.codeRepoUserName != null) return false;
            return this.description != null ? this.description.equals(that.description) : that.description == null;
        }

        @Override
        public final int hashCode() {
            int result = this.accessibility.hashCode();
            result = 31 * result + (this.codeRepo.hashCode());
            result = 31 * result + (this.displayName.hashCode());
            result = 31 * result + (this.mountPath.hashCode());
            result = 31 * result + (this.workspaceId.hashCode());
            result = 31 * result + (this.codeBranch != null ? this.codeBranch.hashCode() : 0);
            result = 31 * result + (this.codeCommit != null ? this.codeCommit.hashCode() : 0);
            result = 31 * result + (this.codeRepoAccessToken != null ? this.codeRepoAccessToken.hashCode() : 0);
            result = 31 * result + (this.codeRepoUserName != null ? this.codeRepoUserName.hashCode() : 0);
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            return result;
        }
    }
}
